import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { PublicPlayerInfo, PhysicalCard } from '../../../core/models/game.models';
import { PlayerPanelComponent } from '../player-panel/player-panel.component';

@Component({
  selector: 'app-game-table',
  standalone: true,
  imports: [CommonModule, DragDropModule, PlayerPanelComponent],
  template: `
    <div class="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center p-4">
      <!-- Circular Opponents Orbit -->
      <div class="w-full flex flex-wrap items-center justify-around gap-4 mb-4 sm:mb-6">
        @for (player of opponents; track player.id) {
          <app-player-panel [player]="player" />
        }
      </div>

      <!-- Main Jungle Game Board Table -->
      <div 
        class="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-b from-[#D4E8C2] to-[#B8D79E] border-8 border-jungle-green/40 shadow-2xl flex flex-col items-center justify-center p-6 select-none"
      >
        <!-- Botanical ring pattern inside table -->
        <div class="absolute inset-4 rounded-full border-2 border-dashed border-jungle-green/30 pointer-events-none"></div>

        <!-- Clockwise Rotation Indicator Arrows -->
        <div class="absolute inset-8 rounded-full border border-jungle-gold/20 flex items-center justify-center pointer-events-none animate-spin" style="animation-duration: 40s;">
          <span class="absolute top-1 text-jungle-gold/60 text-xs font-black">↻ CLOCKWISE ROTATION</span>
          <span class="absolute right-1 text-jungle-gold/60 text-xs font-black">→</span>
          <span class="absolute bottom-1 text-jungle-gold/60 text-xs font-black">←</span>
          <span class="absolute left-1 text-jungle-gold/60 text-xs font-black">↑</span>
        </div>

        <!-- Central Table Exchange Drop Zone -->
        <div 
          cdkDropList
          id="table-exchange-dropzone"
          (cdkDropListDropped)="onDropCardOnTable($event)"
          class="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-jungle-cream/90 backdrop-blur-md border-2 border-jungle-green/30 shadow-inner flex flex-col items-center justify-center p-4 text-center transition-all duration-300"
          [ngClass]="{
            'border-jungle-gold ring-4 ring-jungle-gold/50 bg-jungle-cream': isMyTurn,
            'opacity-90': !isMyTurn
          }"
        >
          <!-- Turn Timer in Center -->
          <div class="flex items-center space-x-1.5 mb-1">
            <span class="text-xs">⏱️</span>
            <span 
              class="font-black text-sm tracking-wider"
              [ngClass]="turnTimeRemaining <= 5 ? 'text-red-600 animate-ping' : 'text-jungle-dark'"
            >
              {{ turnTimeRemaining }}s
            </span>
          </div>

          <!-- Turn Status Instruction -->
          @if (isMyTurn) {
            <div class="text-xs font-extrabold text-jungle-dark uppercase tracking-wide mb-2 animate-bounce">
              ⚡ YOUR TURN ⚡
            </div>

            <!-- Exchange Card Button -->
            <button 
              (click)="onExchangeClick()"
              [disabled]="!selectedCardId"
              class="w-full py-2 px-3 rounded-xl font-bold text-xs shadow-md transition-all duration-200 flex items-center justify-center space-x-1"
              [ngClass]="selectedCardId 
                ? 'bg-jungle-green hover:bg-jungle-dark text-white cursor-pointer hover:scale-105 shadow-jungle' 
                : 'bg-jungle-surface/80 text-jungle-muted cursor-not-allowed'"
            >
              <span>🔄 Exchange Card</span>
            </button>

            <p class="text-[10px] text-jungle-muted mt-1">
              {{ selectedCardId ? 'Click button or drop card here' : 'Select a card below to pass' }}
            </p>
          } @else {
            <div class="text-xs font-bold text-jungle-muted uppercase tracking-wider">
              {{ activeTurnPlayerName ? activeTurnPlayerName + "'s Turn" : 'Passing Cards...' }}
            </div>
            <div class="text-[10px] text-jungle-muted/70 mt-1">
              Next clockwise exchange in progress
            </div>
          }

          <!-- Declare Winner Button -->
          <div class="mt-2 w-full pt-2 border-t border-jungle-green/10">
            <button 
              (click)="onDeclareWinnerClick()"
              class="w-full py-1.5 px-2 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center space-x-1 border shadow-sm"
              [ngClass]="canDeclareWinner 
                ? 'bg-jungle-gold hover:bg-amber-500 text-jungle-dark border-amber-300 animate-jungle-pulse cursor-pointer shadow-gold-glow' 
                : 'bg-jungle-cream/50 text-jungle-muted/70 border-jungle-green/20 hover:text-jungle-dark cursor-pointer'"
              title="Click if you have 4 matching cards!"
            >
              <span>🏆 DECLARE WINNER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GameTableComponent {
  @Input() opponents: PublicPlayerInfo[] = [];
  @Input() isMyTurn = false;
  @Input() selectedCardId: string | null = null;
  @Input() turnTimeRemaining = 30;
  @Input() activeTurnPlayerName = '';
  @Input() canDeclareWinner = false;

  @Output() exchangeCard = new EventEmitter<string>();
  @Output() declareWinner = new EventEmitter<void>();

  public onExchangeClick(): void {
    if (this.selectedCardId) {
      this.exchangeCard.emit(this.selectedCardId);
    }
  }

  public onDeclareWinnerClick(): void {
    this.declareWinner.emit();
  }

  public onDropCardOnTable(event: CdkDragDrop<any>): void {
    const card = event.item.data as PhysicalCard;
    if (card && card.id) {
      this.exchangeCard.emit(card.id);
    }
  }
}
