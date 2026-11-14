import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ToastService } from '../../core/services/toast.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';

@Component({
  selector: 'app-waiting-lobby',
  standalone: true,
  imports: [CommonModule, RouterLink, PlayerAvatarComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col">
      <main class="flex-1 max-w-4xl w-full mx-auto px-4 py-8 flex flex-col space-y-6">
        
        <!-- Room Info Banner -->
        @if (gameService.currentRoom(); as room) {
          <div class="bg-jungle-cream/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div class="flex items-center space-x-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-jungle-surface text-jungle-dark">
                    🏕️ {{ room.roomVisibility }} ROOM
                  </span>
                  <span class="text-xs font-bold text-jungle-muted">
                    {{ room.totalRounds }} Rounds
                  </span>
                </div>
                <h1 class="text-2xl sm:text-3xl font-black text-jungle-dark mt-1">{{ room.roomName }}</h1>
              </div>

              <!-- Copyable Room Code -->
              <div class="flex items-center space-x-2 bg-jungle-surface/50 p-2.5 rounded-2xl border border-jungle-green/30">
                <div class="text-left">
                  <div class="text-[10px] font-bold text-jungle-muted uppercase tracking-wider">ROOM CODE</div>
                  <div class="font-mono text-xl font-black text-jungle-green tracking-widest">{{ room.roomCode }}</div>
                </div>
                <button 
                  (click)="copyRoomCode(room.roomCode)"
                  class="px-3 py-2 rounded-xl bg-jungle-green hover:bg-jungle-dark text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-1"
                >
                  <span>📋 Copy</span>
                </button>
              </div>
            </div>

            <!-- Capacity Progress -->
            <div class="mt-6 pt-4 border-t border-jungle-green/10 flex items-center justify-between text-xs font-bold text-jungle-muted">
              <span>Players Assembled: {{ room.players.length }} / {{ room.maxPlayers }}</span>
              <span>Need minimum 2 ready players to start</span>
            </div>
          </div>

          <!-- Current Player's Specified Card Banner -->
          @if (myPlayer(room); as me) {
            <div 
              class="rounded-3xl p-5 border shadow-sm transition-all flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
              [ngClass]="me.isReady && me.submittedCardName 
                ? 'bg-jungle-cream/95 border-jungle-green/30 shadow-jungle' 
                : 'bg-amber-50/95 border-amber-300'"
            >
              <div class="flex items-center space-x-3 text-left">
                <div 
                  class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                  [ngClass]="me.isReady && me.submittedCardName ? 'bg-jungle-green text-white' : 'bg-amber-500 text-white'"
                >
                  {{ me.isReady && me.submittedCardName ? '✦' : '⚠️' }}
                </div>
                <div>
                  <div 
                    class="text-[10px] font-black uppercase tracking-wider"
                    [ngClass]="me.isReady && me.submittedCardName ? 'text-jungle-green' : 'text-amber-800'"
                  >
                    {{ me.isReady && me.submittedCardName ? 'YOUR SPECIFIED CARD (LOCKED IN)' : 'CARD NOT SPECIFIED YET' }}
                  </div>
                  <div class="text-lg font-black text-jungle-dark flex items-center space-x-2">
                    <span>{{ me.submittedCardName ? ('✦ ' + me.submittedCardName) : 'No card chosen yet' }}</span>
                    @if (me.isReady) {
                      <span class="text-xs px-2 py-0.5 rounded-full bg-jungle-green/20 text-jungle-green font-bold">Ready ✓</span>
                    }
                  </div>
                  <p class="text-xs text-jungle-muted">
                    {{ me.isReady && me.submittedCardName 
                      ? 'You are ready! 4 copies of your card will be generated and shuffled into the deck.' 
                      : 'You must choose your unique card name before the game can start.' }}
                  </p>
                </div>
              </div>

              <div>
                <a 
                  [routerLink]="['/registration', room.roomId]"
                  class="px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center space-x-1.5"
                  [ngClass]="me.isReady && me.submittedCardName 
                    ? 'bg-white hover:bg-jungle-surface/40 text-jungle-dark border border-jungle-green/30' 
                    : 'bg-amber-600 hover:bg-amber-700 text-white animate-pulse'"
                >
                  <span>{{ me.isReady && me.submittedCardName ? '✏️ Modify Card' : '👉 Specify Your Card Now' }}</span>
                </a>
              </div>
            </div>
          }

          <!-- Players Grid in Lobby -->
          <div class="bg-jungle-cream/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
            <h2 class="text-lg font-black text-jungle-dark mb-4 flex items-center space-x-2">
              <span>👥 Explorers in Lobby</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-jungle-green/15 text-jungle-green">
                {{ readyPlayersCount(room) }} ready
              </span>
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              @for (player of room.players; track player.id) {
                <div 
                  class="p-4 rounded-2xl border transition-all flex items-center justify-between"
                  [ngClass]="player.isReady 
                    ? 'bg-jungle-surface/30 border-jungle-green/40 shadow-sm' 
                    : 'bg-white/50 border-gray-200 opacity-80'"
                >
                  <div class="flex items-center space-x-3">
                    <app-player-avatar 
                      [avatarUrl]="player.avatarUrl" 
                      [name]="player.name"
                      [isHost]="player.isHost"
                      [isReady]="player.isReady"
                      [showReadyBadge]="true"
                      size="md"
                    />
                    <div>
                      <div class="font-black text-sm text-jungle-dark flex items-center space-x-1">
                        <span>{{ player.name }}</span>
                        @if (player.id === gameService.currentPlayer()?.id) {
                          <span class="text-[10px] text-jungle-green font-bold">(You)</span>
                        }
                      </div>

                      <div class="text-xs text-jungle-muted mt-0.5">
                        @if (player.submittedCardName) {
                          <span class="font-bold text-jungle-green">✦ {{ player.submittedCardName }}</span>
                        } @else {
                          <span class="italic text-gray-500">Choosing card...</span>
                        }
                      </div>
                    </div>
                  </div>

                  <!-- Ready Tag -->
                  <div>
                    @if (player.isReady) {
                      <span class="px-2.5 py-1 rounded-full bg-jungle-green text-white text-xs font-bold">
                        Ready ✓
                      </span>
                    } @else {
                      <span class="px-2.5 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
                        Waiting...
                      </span>
                    }
                  </div>
                </div>
              }
            </div>

            <!-- Host / Player Action Controls -->
            <div class="mt-8 pt-6 border-t border-jungle-green/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div class="text-xs text-jungle-muted">
                Need all players ready with unique cards before match can start.
              </div>

              <div class="flex items-center space-x-3 w-full sm:w-auto">
                <!-- Leave Room -->
                <button 
                  (click)="gameService.leaveRoom()"
                  class="px-4 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs transition-colors"
                >
                  Leave Lobby
                </button>

                <!-- Host Start Button or Waiting Indicator -->
                @if (gameService.isHost()) {
                  <button 
                    (click)="onStartGame(room)"
                    [disabled]="!canStartGame(room)"
                    class="flex-1 sm:flex-initial px-8 py-3.5 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-jungle-cream font-black text-sm shadow-jungle hover:shadow-jungle-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>🚀 START GAME →</span>
                  </button>
                } @else {
                  <div class="px-6 py-3 rounded-2xl bg-jungle-surface/60 text-jungle-dark text-xs font-bold flex items-center space-x-2">
                    <span class="animate-spin text-sm">🌿</span>
                    <span>Waiting for Host to start game...</span>
                  </div>
                }
              </div>

            </div>

          </div>
        } @else {
          <div class="p-12 text-center bg-jungle-cream/90 rounded-3xl border border-jungle-green/20">
            <p class="text-sm text-jungle-muted animate-pulse">Connecting to room lobby...</p>
          </div>
        }

      </main>
    </div>
  `,
})
export class WaitingLobbyComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public gameService = inject(GameService);
  private toast = inject(ToastService);

  public ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    if (roomId && (!this.gameService.currentRoom() || this.gameService.currentRoom()?.roomId !== roomId)) {
      this.gameService.connectToRoom(roomId);
    }
  }

  public myPlayer(room: any): any {
    const myId = this.gameService.currentPlayer()?.id;
    return (room.players || []).find((p: any) => p.id === myId);
  }

  public copyRoomCode(code: string): void {
    navigator.clipboard.writeText(code);
    this.toast.success(`Room ID ${code} copied! Share it with friends.`);
  }

  public readyPlayersCount(room: any): number {
    return (room.players || []).filter((p: any) => p.isReady).length;
  }

  public canStartGame(room: any): boolean {
    const players = room.players || [];
    if (players.length < 2) return false;
    return players.every((p: any) => p.isReady && p.submittedCardName);
  }

  public onStartGame(room: any): void {
    if (!this.canStartGame(room)) {
      this.toast.warning('All players must submit a card and become ready first.');
      return;
    }
    this.gameService.startGame();
  }
}
