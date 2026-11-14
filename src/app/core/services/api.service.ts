import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { PlayerProfile, PublicRoomState, LeaderboardEntry } from '../models/game.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private resolveInitialBaseUrl(): string {
    if (typeof window === 'undefined') return 'http://localhost:8787';

    // 1. Check if configured in storage
    const saved = localStorage.getItem('star_game_api_url') || sessionStorage.getItem('star_game_api_url');
    if (saved && saved.trim()) return saved.trim().replace(/\/+$/, '');

    // 2. Check if a global __STAR_GAME_API__ was defined
    if ((window as any).__STAR_GAME_API__) return (window as any).__STAR_GAME_API__.replace(/\/+$/, '');

    // 3. Fallback: if localhost use 8787, else origin
    return window.location.hostname !== 'localhost' ? window.location.origin : 'http://localhost:8787';
  }

  private baseUrl = this.resolveInitialBaseUrl();

  public setBaseUrl(url: string): void {
    this.baseUrl = url.trim().replace(/\/+$/, '');
    if (typeof window !== 'undefined') {
      localStorage.setItem('star_game_api_url', this.baseUrl);
    }
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getWsBaseUrl(): string {
    const httpUrl = this.getBaseUrl();
    if (httpUrl.startsWith('https://')) {
      return httpUrl.replace('https://', 'wss://');
    }
    if (httpUrl.startsWith('http://')) {
      return httpUrl.replace('http://', 'ws://');
    }
    return httpUrl;
  }

  private getHeaders(token?: string): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  public async createSession(playerId?: string, playerName?: string, avatarUrl?: string): Promise<{ token: string; player: PlayerProfile }> {
    return await firstValueFrom(
      this.http.post<{ token: string; player: PlayerProfile }>(
        `${this.baseUrl}/api/players/session`,
        { playerId, playerName, avatarUrl }
      )
    );
  }

  public async getProfile(token: string): Promise<{ profile: PlayerProfile; stats: any }> {
    return await firstValueFrom(
      this.http.get<{ profile: PlayerProfile; stats: any }>(
        `${this.baseUrl}/api/players/profile`,
        { headers: this.getHeaders(token) }
      )
    );
  }

  public async updateProfile(token: string, playerName: string, avatarUrl?: string): Promise<{ profile: PlayerProfile }> {
    return await firstValueFrom(
      this.http.put<{ profile: PlayerProfile }>(
        `${this.baseUrl}/api/players/profile`,
        { playerName, avatarUrl },
        { headers: this.getHeaders(token) }
      )
    );
  }

  public async createRoom(
    token: string,
    data: {
      roomName: string;
      maxPlayers: number;
      totalRounds: number;
      roomVisibility: 'PUBLIC' | 'PRIVATE';
      password?: string;
      playerName?: string;
      cardName?: string;
      cardImageUrl?: string;
    }
  ): Promise<{ roomId: string; roomCode: string; roomState: PublicRoomState }> {
    return await firstValueFrom(
      this.http.post<{ roomId: string; roomCode: string; roomState: PublicRoomState }>(
        `${this.baseUrl}/api/rooms`,
        data,
        { headers: this.getHeaders(token) }
      )
    );
  }

  public async joinRoom(
    token: string,
    roomCode: string,
    password?: string
  ): Promise<{ roomId: string; roomCode: string; roomName: string; roomState: PublicRoomState }> {
    return await firstValueFrom(
      this.http.post<{ roomId: string; roomCode: string; roomName: string; roomState: PublicRoomState }>(
        `${this.baseUrl}/api/rooms/join`,
        { roomCode, password },
        { headers: this.getHeaders(token) }
      )
    );
  }

  public async getPublicRooms(): Promise<{ rooms: any[] }> {
    return await firstValueFrom(
      this.http.get<{ rooms: any[] }>(`${this.baseUrl}/api/rooms/public`)
    );
  }

  public async getRoomState(roomId: string): Promise<PublicRoomState> {
    return await firstValueFrom(
      this.http.get<PublicRoomState>(`${this.baseUrl}/api/rooms/${roomId}/state`)
    );
  }

  public async getGlobalLeaderboard(): Promise<{ leaderboard: LeaderboardEntry[] }> {
    return await firstValueFrom(
      this.http.get<{ leaderboard: LeaderboardEntry[] }>(`${this.baseUrl}/api/leaderboard/global`)
    );
  }

  public async uploadCardImage(token: string, roomId: string, imageData: string): Promise<{ success: boolean; imageUrl: string }> {
    return await firstValueFrom(
      this.http.post<{ success: boolean; imageUrl: string }>(
        `${this.baseUrl}/api/rooms/${roomId}/card/upload`,
        { imageData },
        { headers: this.getHeaders(token) }
      )
    );
  }
}
