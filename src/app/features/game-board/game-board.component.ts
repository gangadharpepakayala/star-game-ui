import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ToastService } from '../../core/services/toast.service';
import { GameHeaderComponent } from '../../shared/components/game-header/game-header.component';
import { GameTableComponent } from '../../shared/components/game-table/game-table.component';
import { CardHandComponent } from '../../shared/components/card-hand/card-hand.component';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { LeaderboardTableComponent } from '../../shared/components/leaderboard-table/leaderboard-table.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CommonModule,
    GameHeaderComponent,
    GameTableComponent,
    CardHandComponent,
    GameCardComponent,
    LeaderboardTableComponent,
  ],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-between overflow-x-hidden">
      <!-- Top Game Header -->
      <app-game-header 
        [roomCode]="gameService.currentRoom()?.roomCode"
        [currentRound]="gameService.currentRoom()?.currentRound"
        [totalRounds]="gameService.currentRoom()?.totalRounds"
        [player]="gameService.currentPlayer()"
        [showLeaveButton]="true"
        (leave)="onLeaveRoom()"
      />

      <!-- Main Game Board Arena -->
      <main class="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 max-w-6xl w-full mx-auto relative">
        
        <!-- Live Round & Turn Alert Banner -->
        <div class="mb-2 text-center">
          @if (gameService.isMyTurn()) {
            <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-jungle-gold/90 text-jungle-dark font-black text-xs sm:text-sm shadow-md animate-bounce">
              <span>⚡ YOUR TURN TO PASS A CARD (CLOCKWISE) ⚡</span>
            </div>
          } @else {
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-jungle-surface/60 text-jungle-dark font-semibold text-xs">
              <span class="animate-spin">🌿</span>
              <span>Waiting for {{ activeTurnPlayerName() }} to pass a card...</span>
            </div>
          }
        </div>

        <!-- Central Jungle Table with Circular Opponents -->
        <app-game-table 
          [opponents]="gameService.otherPlayers()"
          [isMyTurn]="gameService.isMyTurn()"
          [selectedCardId]="gameService.selectedCardId()"
          [turnTimeRemaining]="gameService.turnTimeRemaining()"
          [activeTurnPlayerName]="activeTurnPlayerName()"
          [canDeclareWinner]="gameService.canDeclareWinner()"
          (exchangeCard)="onExchangeCard($event)"
          (declareWinner)="onDeclareWinner()"
        />

        <!-- Current Player Interactive Hand at Bottom -->
        <section class="w-full mt-4 bg-jungle-cream/80 backdrop-blur-md rounded-3xl border border-jungle-green/20 p-2 sm:p-4 shadow-jungle">
          <app-card-hand 
            [cards]="gameService.privateHand()"
            [selectedCardId]="gameService.selectedCardId()"
            (cardSelected)="onCardSelected($event)"
            (cardExchanged)="onExchangeCard($event)"
          />
        </section>

      </main>

      <!-- Round Winner Celebration Modal (Screen 7) -->
      @if (gameService.isWinnerModalOpen(); as isOpen) {
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div class="max-w-md w-full bg-jungle-cream rounded-3xl p-6 sm:p-8 border-4 border-jungle-gold shadow-2xl text-center relative overflow-hidden">
            
            <!-- Close Button (Available for all players) -->
            <button 
              (click)="closeWinnerModal()" 
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark font-bold text-sm flex items-center justify-center transition-colors"
              title="Close Celebration"
            >
              ✕
            </button>

            <!-- Confetti / Trophy Banner -->
            <div class="w-20 h-20 mx-auto rounded-full bg-jungle-gold/20 flex items-center justify-center text-4xl shadow-inner mb-3">
              🏆
            </div>

            <div class="text-xs font-black text-jungle-gold uppercase tracking-widest">
              ROUND {{ gameService.currentRoom()?.currentRound }} WINNER!
            </div>

            <h3 class="text-2xl sm:text-3xl font-black text-jungle-dark mt-1">
              {{ gameService.roundWinner()?.winnerPlayerName }}
            </h3>

            <p class="text-xs text-jungle-muted mt-1">
              Gathered all four matching <span class="font-bold text-jungle-green">{{ gameService.roundWinner()?.cardName }}</span> cards!
            </p>

            <!-- 4 Matching Cards Preview -->
            <div class="flex items-center justify-center space-x-1.5 my-5">
              @for (card of (gameService.roundWinner()?.matchingCards || []); track card.id) {
                <div class="transform hover:scale-105 transition-transform">
                  <app-game-card [card]="card" size="sm" />
                </div>
              }
            </div>

            <div class="inline-block px-4 py-1.5 rounded-full bg-jungle-surface text-jungle-dark font-black text-sm mb-6">
              ⭐ +10 Points Awarded!
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              @if (gameService.isHost()) {
                <button 
                  (click)="onNextRound()"
                  class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-white font-black text-sm shadow-jungle transition-all"
                >
                  Next Round →
                </button>
              } @else {
                <div class="text-xs text-jungle-muted italic">
                  Waiting for host to start next round...
                </div>
              }

              <button 
                (click)="toggleLeaderboardModal()"
                class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark font-bold text-xs transition-colors"
              >
                View Leaderboard
              </button>

              <button 
                (click)="closeWinnerModal()"
                class="w-full sm:w-auto px-4 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs transition-colors"
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
          <div class="max-w-xl w-full bg-jungle-cream rounded-3xl p-6 border border-jungle-green/20 shadow-2xl relative">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-black text-jungle-dark">🏆 Room Leaderboard</h3>
              <button 
                (click)="toggleLeaderboardModal()"
                class="w-8 h-8 rounded-full bg-jungle-surface flex items-center justify-center text-xs font-bold text-jungle-dark hover:bg-jungle-surface/80"
              >
                ✕
              </button>
            </div>

            <app-leaderboard-table [entries]="gameService.roomLeaderboard()" />

            <div class="mt-4 text-center">
              <button 
                (click)="toggleLeaderboardModal()"
                class="px-6 py-2.5 rounded-xl bg-jungle-green text-white font-bold text-xs"
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
  public gameService = inject(GameService);
  private toast = inject(ToastService);

  public ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    if (roomId && (!this.gameService.currentRoom() || this.gameService.currentRoom()?.roomId !== roomId)) {
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
}
