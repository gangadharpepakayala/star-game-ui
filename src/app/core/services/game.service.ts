import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { WebSocketService } from '../websocket/websocket.service';
import { AudioService } from './audio.service';
import { ToastService } from './toast.service';
import { 
  PlayerProfile, 
  PublicRoomState, 
  PhysicalCard, 
  PublicPlayerInfo, 
  LeaderboardEntry 
} from '../models/game.models';
import { 
  WinnerValidatedPayload, 
  RoundCompletedPayload, 
  GameCompletedPayload 
} from '../models/socket-events.models';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private api = inject(ApiService);
  private ws = inject(WebSocketService);
  private audio = inject(AudioService);
  private toast = inject(ToastService);
  private router = inject(Router);

  // Core State Signals
  public sessionToken = signal<string | null>(null);
  public currentPlayer = signal<PlayerProfile | null>(null);
  public currentRoom = signal<PublicRoomState | null>(null);
  public privateHand = signal<PhysicalCard[]>([]);
  public selectedCardId = signal<string | null>(null);
  public turnTimeRemaining = signal<number>(30);

  // Round & Game Results Signals
  public roundWinner = signal<WinnerValidatedPayload | null>(null);
  public roundCompleted = signal<RoundCompletedPayload | null>(null);
  public gameCompleted = signal<GameCompletedPayload | null>(null);
  public roomLeaderboard = signal<LeaderboardEntry[]>([]);
  public globalLeaderboard = signal<LeaderboardEntry[]>([]);

  // UI Modal Signals
  public isWinnerModalOpen = signal<boolean>(false);
  public isLeaderboardModalOpen = signal<boolean>(false);
  public isChampionModalOpen = signal<boolean>(false);
  public isLoading = signal<boolean>(false);

  // Computed State
  public isHost = computed(() => {
    const room = this.currentRoom();
    const player = this.currentPlayer();
    if (!room || !player) return false;
    return room.hostPlayerId === player.id;
  });

  public isMyTurn = computed(() => {
    const room = this.currentRoom();
    const player = this.currentPlayer();
    if (!room || !player) return false;
    return room.currentTurnPlayerId === player.id;
  });

  public meInRoom = computed(() => {
    const room = this.currentRoom();
    const player = this.currentPlayer();
    if (!room || !player) return null;
    return room.players.find(p => p.id === player.id) || null;
  });

  public otherPlayers = computed(() => {
    const room = this.currentRoom();
    const player = this.currentPlayer();
    if (!room || !player) return [];
    return room.players.filter(p => p.id !== player.id);
  });

  public canDeclareWinner = computed(() => {
    const hand = this.privateHand();
    if (hand.length !== 4) return false;
    const firstType = hand[0].cardTypeId;
    return hand.every(c => c.cardTypeId === firstType);
  });

  constructor() {
    this.initSession();
    this.setupSocketListeners();
  }

  /**
   * Initializes or restores player session from sessionStorage
   */
  public async initSession(): Promise<void> {
    if (typeof window === 'undefined') return;

    const savedToken = sessionStorage.getItem('star_game_token');
    const savedPlayer = sessionStorage.getItem('star_game_player');

    if (savedToken && savedPlayer) {
      try {
        this.sessionToken.set(savedToken);
        this.currentPlayer.set(JSON.parse(savedPlayer));
        return;
      } catch {}
    }

    // Create a new guest session for this browser window/tab
    await this.createNewGuestSession();
  }

  public async createNewGuestSession(name?: string, avatar?: string): Promise<void> {
    try {
      this.isLoading.set(true);
      const res = await this.api.createSession(undefined, name, avatar);
      this.sessionToken.set(res.token);
      this.currentPlayer.set(res.player);

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('star_game_token', res.token);
        sessionStorage.setItem('star_game_player', JSON.stringify(res.player));
      }
    } catch (err: any) {
      this.toast.error('Failed to establish player session');
    } finally {
      this.isLoading.set(false);
    }
  }

  public async updateProfile(name: string, avatar?: string): Promise<void> {
    const token = this.sessionToken();
    if (!token) return;

    try {
      this.isLoading.set(true);
      const res = await this.api.updateProfile(token, name, avatar);
      this.currentPlayer.set(res.profile);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('star_game_player', JSON.stringify(res.profile));
      }
      this.toast.success('Profile updated successfully!');
    } catch (err: any) {
      this.toast.error(err.error?.error || 'Failed to update profile');
    } finally {
      this.isLoading.set(false);
    }
  }

  /**
   * Connect WebSocket to room
   */
  public connectToRoom(roomId: string): void {
    const token = this.sessionToken();
    const player = this.currentPlayer();
    if (!token || !player) return;

    this.ws.connect(roomId, token, player.id, player.playerName, player.avatarUrl, this.api.getWsBaseUrl());
  }

  /**
   * Room actions
   */
  public async createRoom(data: {
    roomName: string;
    maxPlayers: number;
    totalRounds: number;
    roomVisibility: 'PUBLIC' | 'PRIVATE';
    password?: string;
    playerName?: string;
    cardName?: string;
    cardImageUrl?: string;
  }): Promise<string | null> {
    const token = this.sessionToken();
    if (!token) return null;

    try {
      this.isLoading.set(true);
      const res = await this.api.createRoom(token, data);
      this.currentRoom.set(res.roomState);
      if (data.playerName) {
        const curr = this.currentPlayer();
        if (curr) {
          const updated = { ...curr, playerName: data.playerName };
          this.currentPlayer.set(updated);
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('star_game_player', JSON.stringify(updated));
          }
        }
      }
      this.connectToRoom(res.roomId);
      this.toast.success(`Room "${data.roomName}" created!`);
      if (data.cardName && data.cardName.trim()) {
        this.router.navigate(['/lobby', res.roomId]);
      } else {
        this.router.navigate(['/registration', res.roomId]);
      }
      return res.roomId;
    } catch (err: any) {
      this.toast.error(err.error?.error || 'Failed to create room');
      return null;
    } finally {
      this.isLoading.set(false);
    }
  }

  public async joinRoom(roomCode: string, password?: string): Promise<string | null> {
    const token = this.sessionToken();
    if (!token) return null;

    try {
      this.isLoading.set(true);
      const res = await this.api.joinRoom(token, roomCode, password);
      this.currentRoom.set(res.roomState);
      this.connectToRoom(res.roomId);
      this.toast.success(`Joined room "${res.roomName}"!`);
      this.router.navigate(['/registration', res.roomId]);
      return res.roomId;
    } catch (err: any) {
      this.toast.error(err.error?.error || 'Failed to join room');
      return null;
    } finally {
      this.isLoading.set(false);
    }
  }

  public submitCard(cardName: string, cardImageUrl?: string, playerName?: string): void {
    const room = this.currentRoom();
    if (!room) return;
    const finalName = playerName?.trim() || this.currentPlayer()?.playerName;
    this.ws.send('submit_card', room.roomId, { cardName, cardImageUrl, playerName: finalName });
  }

  public setReady(isReady: boolean): void {
    const room = this.currentRoom();
    if (!room) return;
    this.ws.send('player_ready', room.roomId, { isReady });
  }

  public startGame(): void {
    const room = this.currentRoom();
    if (!room) return;
    this.ws.send('start_game', room.roomId, {});
  }

  public selectCard(cardId: string): void {
    if (this.selectedCardId() === cardId) {
      this.selectedCardId.set(null);
    } else {
      this.selectedCardId.set(cardId);
      this.audio.playCardSelect();
    }
  }

  public exchangeCard(cardId: string): void {
    const room = this.currentRoom();
    if (!room) return;
    if (!this.isMyTurn()) {
      this.toast.warning('Wait for your turn to exchange!');
      this.audio.playError();
      return;
    }

    this.ws.send('exchange_card', room.roomId, { cardId });
    this.selectedCardId.set(null);
    this.audio.playCardPass();
  }

  public exchangeSelectedCard(): void {
    const cardId = this.selectedCardId();
    if (!cardId) {
      this.toast.warning('Please select a card to exchange.');
      return;
    }
    this.exchangeCard(cardId);
  }

  public declareWinner(): void {
    const room = this.currentRoom();
    if (!room) return;
    this.ws.send('declare_winner', room.roomId, {});
  }

  public requestNextRound(): void {
    const room = this.currentRoom();
    if (!room) return;
    this.isWinnerModalOpen.set(false);
    this.ws.send('request_next_round', room.roomId, {});
  }

  public leaveRoom(): void {
    const room = this.currentRoom();
    if (room) {
      this.ws.send('leave_room', room.roomId, {});
      this.ws.disconnect();
    }
    this.currentRoom.set(null);
    this.privateHand.set([]);
    this.selectedCardId.set(null);
    this.isWinnerModalOpen.set(false);
    this.isChampionModalOpen.set(false);
    this.router.navigate(['/']);
  }

  /**
   * Listen to real-time events from WebSocket
   */
  private setupSocketListeners(): void {
    // Room updated
    this.ws.onEvent('room_updated').subscribe((msg) => {
      this.currentRoom.set(msg.payload.room);

      // Handle navigation based on room status
      const status = msg.payload.room.roomStatus;
      const currentUrl = this.router.url;

      if (status === 'IN_PROGRESS' && !currentUrl.includes('/game')) {
        this.router.navigate(['/game', msg.payload.room.roomId]);
      } else if (status === 'WAITING' && currentUrl.includes('/game')) {
        this.router.navigate(['/lobby', msg.payload.room.roomId]);
      }
    });

    // Private hand updated
    this.ws.onEvent('private_hand_updated').subscribe((msg) => {
      this.privateHand.set(msg.payload.cards);
    });

    // Turn started
    this.ws.onEvent('turn_started').subscribe((msg) => {
      this.turnTimeRemaining.set(msg.payload.turnTimeSeconds || 30);
      if (msg.payload.playerId === this.currentPlayer()?.id) {
        this.audio.playTurnNotification();
        this.toast.info('Your turn! Select a card to pass clockwise.', 'Your Turn');
      }
    });

    // Timer updated
    this.ws.onEvent('timer_updated').subscribe((msg) => {
      this.turnTimeRemaining.set(msg.payload.remainingSeconds);
    });

    // Card exchanged
    this.ws.onEvent('card_exchanged').subscribe((msg) => {
      this.audio.playCardPass();
    });

    // Winner validated
    this.ws.onEvent('winner_validated').subscribe((msg) => {
      this.roundWinner.set(msg.payload);
      this.isWinnerModalOpen.set(true);
      this.audio.playVictory();
    });

    // Invalid winner claim
    this.ws.onEvent('invalid_winner_claim').subscribe((msg) => {
      this.toast.error(msg.payload.reason, 'Claim Rejected');
      this.audio.playError();
    });

    // Round completed
    this.ws.onEvent('round_completed').subscribe((msg) => {
      this.roundCompleted.set(msg.payload);
      this.roomLeaderboard.set(msg.payload.leaderboard);
      this.isWinnerModalOpen.set(true);
    });

    // Next round started -> Automatically close winner celebration modal for ALL players!
    this.ws.onEvent('next_round_started').subscribe((msg) => {
      this.isWinnerModalOpen.set(false);
      this.toast.info(`Round ${msg.payload.roundNumber} has started! Deal in progress...`);
    });

    // Game started
    this.ws.onEvent('game_started').subscribe((msg) => {
      this.isWinnerModalOpen.set(false);
    });

    // Game completed (Final Champion)
    this.ws.onEvent('game_completed').subscribe((msg) => {
      this.gameCompleted.set(msg.payload);
      this.isWinnerModalOpen.set(false);
      this.isChampionModalOpen.set(true);
      this.audio.playVictory();
      this.router.navigate(['/champion', this.currentRoom()?.roomId]);
    });

    // Server error
    this.ws.onEvent('error').subscribe((msg) => {
      this.toast.error(msg.payload.message || 'An error occurred');
      this.audio.playError();
    });
  }
}
