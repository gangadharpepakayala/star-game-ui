import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GameService } from '../../core/services/game.service';
import { ToastService } from '../../core/services/toast.service';
import { GameHeaderComponent } from '../../shared/components/game-header/game-header.component';
import { PlayerCarouselComponent } from '../../shared/components/player-carousel/player-carousel.component';
import { GameTableComponent } from '../../shared/components/game-table/game-table.component';
import { CardHandComponent } from '../../shared/components/card-hand/card-hand.component';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { LeaderboardTableComponent } from '../../shared/components/leaderboard-table/leaderboard-table.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    GameHeaderComponent,
    PlayerCarouselComponent,
    GameTableComponent,
    CardHandComponent,
    GameCardComponent,
    LeaderboardTableComponent,
  ],
  template: `
    <div class="h-[100dvh] max-h-[100dvh] jungle-pattern flex flex-col justify-between overflow-hidden select-none">
      
      <!-- Top Game Header -->
      <app-game-header 
        [roomCode]="gameService.currentRoom()?.roomCode"
        [currentRound]="gameService.currentRoom()?.currentRound"
        [totalRounds]="gameService.currentRoom()?.totalRounds"
        [player]="gameService.currentPlayer()"
        [showLeaveButton]="true"
        [isHost]="gameService.isHost()"
        [showEndGameButton]="true"
        [showPauseButton]="true"
        [isPaused]="gameService.currentRoom()?.isPaused || false"
        (leave)="onLeaveRoom()"
        (endGame)="onEndGame()"
        (pauseGame)="onPauseGame()"
        (resumeGame)="onResumeGame()"
      />

      <!-- Main Game Board Arena (Wrapped in cdkDropListGroup to connect hand to table dropzone) -->
      <main 
        cdkDropListGroup
        class="flex-1 flex flex-col items-center justify-between px-2 py-1 max-w-5xl w-full mx-auto relative overflow-hidden"
      >
        
        <!-- 1. TOP: Player Carousel (All players in clockwise POV, auto-slides to active turn) -->
        <section class="w-full flex-shrink-0 pt-0.5">
          <app-player-carousel 
            [players]="gameService.orderedAllPlayers()"
            [activePlayerId]="gameService.currentRoom()?.currentTurnPlayerId || null"
            [currentPlayerId]="gameService.currentPlayer()?.id || null"
          />
        </section>

        <!-- 2. MIDDLE: Perfect Circle Jungle Table (Dropzone + Timer + Exchange + Declare) -->
        <div class="flex-1 flex items-center justify-center w-full min-h-0 py-1">
          <app-game-table 
            [isMyTurn]="gameService.isMyTurn()"
            [selectedCardId]="gameService.selectedCardId()"
            [turnTimeRemaining]="gameService.turnTimeRemaining()"
            [activeTurnPlayerName]="activeTurnPlayerName()"
            [canDeclareWinner]="gameService.canDeclareWinner()"
            (exchangeCard)="onExchangeCard($event)"
            (declareWinner)="onDeclareWinner()"
          />
        </div>

        <!-- 3. BOTTOM: Current Player 4-Card Hand -->
        <section class="w-full flex-shrink-0 bg-jungle-cream/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-jungle-green/20 px-1 py-1 sm:px-3 sm:py-2 shadow-jungle">
          <app-card-hand 
            [cards]="gameService.privateHand()"
            [selectedCardId]="gameService.selectedCardId()"
            [isMyTurn]="gameService.isMyTurn()"
            (cardSelected)="onCardSelected($event)"
            (cardExchanged)="onExchangeCard($event)"
          />
        </section>

      </main>

      <!-- Fullscreen Game Paused Overlay for All Players -->
      @if (gameService.currentRoom()?.isPaused) {
        <div class="fixed inset-0 z-40 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fade-in select-none">
          <div class="max-w-md w-full bg-jungle-cream rounded-3xl p-6 sm:p-8 border-4 border-jungle-gold shadow-2xl text-center space-y-4">
            
            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-jungle-gold/20 flex items-center justify-center text-3xl sm:text-4xl shadow-inner animate-pulse">
              ⏸️
            </div>

            <div class="space-y-1">
              <span class="text-[10px] sm:text-xs font-black uppercase tracking-widest text-jungle-gold">
                Arena Paused
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-jungle-dark tracking-wide">
                GAME PAUSED
              </h2>
            </div>

            <p class="text-xs sm:text-sm text-jungle-muted px-2">
              @if (gameService.isHost()) {
                You have paused the game. Turn timers and card exchanges are frozen for everyone.
              } @else {
                The game has been paused by the host (<strong class="text-jungle-dark font-bold">{{ gameService.currentRoom()?.pausedByPlayerName || 'Admin' }}</strong>). Please wait for the host to resume.
              }
            </p>

            <!-- Frozen Turn Timer Badge -->
            <div class="py-2 px-4 rounded-2xl bg-jungle-surface/60 border border-jungle-green/20 inline-flex items-center space-x-2 text-xs font-bold text-jungle-dark">
              <span>⏳</span>
              <span>Timer frozen at {{ gameService.turnTimeRemaining() }}s</span>
            </div>

            <!-- Host Resume Action vs Player Waiting -->
            <div class="pt-2">
              @if (gameService.isHost()) {
                <button 
                  (click)="onResumeGame()"
                  class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-jungle-green hover:from-emerald-500 hover:to-jungle-dark text-white font-black text-sm shadow-jungle hover:shadow-jungle-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>▶️</span>
                  <span>RESUME GAME FOR ALL PLAYERS</span>
                </button>
              } @else {
                <div class="py-2 text-xs font-bold text-jungle-green flex items-center justify-center space-x-2">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-jungle-gold animate-ping"></span>
                  <span>Waiting for admin to resume...</span>
                </div>
              }
            </div>

          </div>
        </div>
      }

      <!-- 3-Second Countdown Overlay Before Next Round -->
      @if (gameService.roundCountdown() > 0) {
        <div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md animate-fade-in p-4">
          <div class="text-center p-6 bg-jungle-cream/95 rounded-3xl border-4 border-jungle-gold shadow-2xl max-w-xs w-full mx-auto animate-bounce">
            <div class="text-xs uppercase font-black tracking-widest text-jungle-gold mb-1">Get Ready!</div>
            <div class="text-base font-bold text-jungle-dark">Next Round Starting In</div>
            <div class="text-6xl font-black text-jungle-green my-3 font-mono">
              {{ gameService.roundCountdown() }}
            </div>
            <p class="text-xs text-jungle-muted">Cards are being dealt clockwise...</p>
          </div>
        </div>
      }

      <!-- Round Winner Celebration Modal (Screen 7) -->
      @if (gameService.isWinnerModalOpen(); as isOpen) {
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div class="max-w-md w-full bg-jungle-cream rounded-3xl p-5 sm:p-7 border-4 border-jungle-gold shadow-2xl text-center relative overflow-hidden">
            
            <!-- Close Button -->
            <button 
              (click)="closeWinnerModal()" 
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
              title="Close Celebration"
            >
              ✕
            </button>

            <!-- Confetti / Trophy Banner -->
            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-jungle-gold/20 flex items-center justify-center text-3xl sm:text-4xl shadow-inner mb-2">
              🏆
            </div>

            <div class="text-xs font-black text-jungle-gold uppercase tracking-widest">
              ROUND {{ gameService.currentRoom()?.currentRound }} WINNER!
            </div>

            <h3 class="text-xl sm:text-2xl font-black text-jungle-dark mt-1 truncate">
              {{ gameService.roundWinner()?.winnerPlayerName }}
            </h3>

            <p class="text-xs text-jungle-muted mt-0.5">
              Collected all four matching <span class="font-bold text-jungle-green">{{ gameService.roundWinner()?.cardName }}</span> cards!
            </p>

            <!-- 4 Matching Cards Preview -->
            <div class="flex items-center justify-center space-x-1.5 my-4">
              @for (card of (gameService.roundWinner()?.matchingCards || []); track card.id) {
                <div class="transform hover:scale-105 transition-transform">
                  <app-game-card [card]="card" size="sm" />
                </div>
              }
            </div>

            <div class="inline-block px-3 py-1 rounded-full bg-jungle-surface text-jungle-dark font-black text-xs mb-4">
              ★ +10 Points Awarded!
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-2">
              @if (gameService.isHost()) {
                <button 
                  (click)="onNextRound()"
                  class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-white font-black text-xs shadow-jungle transition-all cursor-pointer"
                >
                  Next Round →
                </button>
              } @else {
                <div class="text-xs text-jungle-muted italic py-1">
                  Waiting for host to start next round...
                </div>
              }

              <button 
                (click)="toggleLeaderboardModal()"
                class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark font-bold text-xs transition-colors cursor-pointer"
              >
                View Leaderboard
              </button>

              <button 
                (click)="closeWinnerModal()"
                class="w-full sm:w-auto px-3 py-2.5 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      }

      <!-- Leaderboard Modal (Screen 8) -->
      @if (gameService.isLeaderboardModalOpen()) {
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div class="max-w-xl w-full bg-jungle-cream rounded-3xl p-5 border border-jungle-green/20 shadow-2xl relative">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg sm:text-xl font-black text-jungle-dark">🏆 Room Leaderboard</h3>
              <button 
                (click)="toggleLeaderboardModal()"
                class="w-8 h-8 rounded-full bg-jungle-surface flex items-center justify-center text-xs font-bold text-jungle-dark hover:bg-jungle-surface/80 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <app-leaderboard-table [entries]="gameService.roomLeaderboard()" />

            <div class="mt-4 text-center">
              <button 
                (click)="toggleLeaderboardModal()"
                class="px-5 py-2 rounded-xl bg-jungle-green text-white font-bold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      }

    </div>
  `,
})
export class GameBoardComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public gameService = inject(GameService);
  private toast = inject(ToastService);

  public ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    const room = this.gameService.currentRoom();

    // Guard: If game is completed, do not allow entering game-board; route straight to champion
    if (room?.roomStatus === 'COMPLETED' && roomId) {
      this.router.navigate(['/champion', roomId], { replaceUrl: true });
      return;
    }

    if (roomId && (!room || room.roomId !== roomId)) {
      this.gameService.connectToRoom(roomId);
    }
  }

  public activeTurnPlayerName(): string {
    const turnId = this.gameService.currentRoom()?.currentTurnPlayerId;
    if (!turnId) return '';
    const p = this.gameService.currentRoom()?.players.find(pl => pl.id === turnId);
    return p?.name || 'Player';
  }

  public onCardSelected(cardId: string): void {
    this.gameService.selectCard(cardId);
  }

  public onExchangeCard(cardId: string): void {
    this.gameService.exchangeCard(cardId);
  }

  public onDeclareWinner(): void {
    this.gameService.declareWinner();
  }

  public onNextRound(): void {
    this.gameService.requestNextRound();
  }

  public closeWinnerModal(): void {
    this.gameService.isWinnerModalOpen.set(false);
  }

  public toggleLeaderboardModal(): void {
    this.gameService.isLeaderboardModalOpen.update(v => !v);
  }

  public onLeaveRoom(): void {
    this.gameService.leaveRoom();
  }

  public onPauseGame(): void {
    this.gameService.pauseGame();
  }

  public onResumeGame(): void {
    this.gameService.resumeGame();
  }

  public onEndGame(): void {
    this.gameService.endGame();
  }
}
