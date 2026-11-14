import { Injectable, signal } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { 
  ClientEventType, 
  ServerEventType, 
  BaseSocketMessage 
} from '../models/socket-events.models';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public isConnected = signal<boolean>(false);
  public isConnecting = signal<boolean>(false);
  public connectionError = signal<string | null>(null);

  private ws: WebSocket | null = null;
  private messageSubject = new Subject<BaseSocketMessage<ServerEventType, any>>();
  private heartbeatInterval: any = null;
  private reconnectTimeout: any = null;
  private currentUrl = '';
  private currentToken = '';
  private currentPlayerId = '';
  private currentPlayerName = '';
  private currentAvatarUrl = '';
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  public connect(
    roomId: string, 
    token: string, 
    playerId: string, 
    playerName?: string, 
    avatarUrl?: string, 
    baseUrl?: string
  ): void {
    this.currentToken = token;
    this.currentPlayerId = playerId;
    if (playerName) this.currentPlayerName = playerName;
    if (avatarUrl) this.currentAvatarUrl = avatarUrl;

    const base = baseUrl || (typeof window !== 'undefined' && window.location.hostname !== 'localhost'
      ? `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}`
      : 'ws://localhost:8787');

    const wsUrl = `${base}/api/rooms/${roomId}/ws?token=${encodeURIComponent(token)}&playerId=${encodeURIComponent(playerId)}`;
    this.currentUrl = wsUrl;

    this.disconnect();
    this.isConnecting.set(true);
    this.connectionError.set(null);

    try {
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        this.isConnected.set(true);
        this.isConnecting.set(false);
        this.connectionError.set(null);
        this.reconnectAttempts = 0;
        this.startHeartbeat();

        // Send initial join_room message with full player name and avatar
        this.send('join_room', roomId, {
          token: this.currentToken,
          playerId: this.currentPlayerId,
          playerName: this.currentPlayerName,
          avatarUrl: this.currentAvatarUrl,
        });
      };

      this.ws.onmessage = (event: MessageEvent) => {
        try {
          const data: BaseSocketMessage<ServerEventType, any> = JSON.parse(event.data);
          this.messageSubject.next(data);
        } catch (e) {
          console.error('Failed to parse WebSocket message', e);
        }
      };

      this.ws.onerror = (err) => {
        console.warn('WebSocket connection error', err);
        this.connectionError.set('WebSocket connection error');
      };

      this.ws.onclose = () => {
        this.isConnected.set(false);
        this.isConnecting.set(false);
        this.stopHeartbeat();
        this.scheduleReconnect(roomId);
      };
    } catch (e: any) {
      this.isConnecting.set(false);
      this.connectionError.set(e.message || 'Unable to establish WebSocket connection');
    }
  }

  public send<T extends ClientEventType>(event: T, roomId: string, payload: any): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const msg: BaseSocketMessage<T, any> = {
        event,
        roomId,
        payload: {
          token: this.currentToken,
          ...payload,
        },
      };
      this.ws.send(JSON.stringify(msg));
    }
  }

  public onEvent<P = any>(eventType: ServerEventType): Observable<BaseSocketMessage<ServerEventType, P>> {
    return this.messageSubject.asObservable().pipe(
      filter(msg => msg.event === eventType)
    );
  }

  public disconnect(): void {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
    this.stopHeartbeat();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isConnected.set(false);
    this.isConnecting.set(false);
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          event: 'heartbeat',
          roomId: '',
          payload: { token: this.currentToken },
        }));
      }
    }, 20000);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private scheduleReconnect(roomId: string): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) return;
    this.reconnectAttempts++;
    const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 8000);

    this.reconnectTimeout = setTimeout(() => {
      if (!this.isConnected() && this.currentUrl) {
        this.connect(roomId, this.currentToken, this.currentPlayerId);
      }
    }, delay);
  }
}
