import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { PhysicalCard } from '../../../core/models/game.models';

@Component({
  selector: 'app-game-table',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  template: `
    <div class="relative w-full flex items-center justify-center select-none py-1">
      
      <!-- Main Jungle Circular Table (Guaranteed Aspect-Square, True Circle, Never Squished) -->
      <div 
        class="relative aspect-square w-48 xs:w-56 sm:w-64 md:w-72 rounded-full bg-gradient-to-b from-[#D8ECC6] to-[#B5D698] border-4 sm:border-6 border-jungle-green/40 shadow-xl flex items-center justify-center p-2 sm:p-3 flex-shrink-0"
      >
        <!-- Inner dashed decorative ring -->
        <div class="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-jungle-green/30 pointer-events-none"></div>

        <!-- Clockwise Animated SVG Curved Arrows (Pure directional motion) -->
        <svg 
          viewBox="0 0 100 100" 
          class="absolute inset-0 w-full h-full pointer-events-none animate-spin" 
          style="animation-duration: 22s;"
        >
          <defs>
            <marker id="circleArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#D9A441" />
            </marker>
          </defs>
          <path d="M 50 7 A 43 43 0 0 1 93 50" fill="none" stroke="#D9A441" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#circleArrow)" opacity="0.9" />
          <path d="M 93 50 A 43 43 0 0 1 50 93" fill="none" stroke="#D9A441" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#circleArrow)" opacity="0.9" />
          <path d="M 50 93 A 43 43 0 0 1 7 50" fill="none" stroke="#D9A441" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#circleArrow)" opacity="0.9" />
          <path d="M 7 50 A 43 43 0 0 1 50 7" fill="none" stroke="#D9A441" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#circleArrow)" opacity="0.9" />
        </svg>

        <!-- Central Table Exchange Drop Zone (Drop card here to pass) -->
        <div 
          cdkDropList
          id="table-exchange-dropzone"
          [cdkDropListData]="[]"
          (cdkDropListDropped)="onDropCardOnTable($event)"
          class="relative z-10 aspect-square w-32 xs:w-38 sm:w-46 md:w-52 rounded-full bg-jungle-cream/95 backdrop-blur-md border-2 border-jungle-green/30 shadow-inner flex flex-col items-center justify-between p-2 sm:p-3 text-center transition-all duration-300 flex-shrink-0"
          [ngClass]="{
            'border-jungle-gold ring-4 ring-jungle-gold/60 bg-gradient-to-b from-[#FFFDF0] to-jungle-cream shadow-gold-glow scale-102': isMyTurn,
            'opacity-95': !isMyTurn
          }"
        >
          <!-- Turn Timer Header -->
          <div class="flex items-center space-x-1 pt-1">
            <span class="text-xs">⏱️</span>
            <span 
              class="font-black text-xs sm:text-sm tracking-wider font-mono"
              [ngClass]="turnTimeRemaining <= 5 ? 'text-red-600 animate-ping' : 'text-jungle-dark'"
            >
              {{ turnTimeRemaining }}s
            </span>
          </div>

          <!-- Central Action / Status Display -->
          <div class="my-auto flex flex-col items-center justify-center w-full px-1">
            @if (isMyTurn) {
              @if (selectedCardId) {
                <button 
                  type="button"
                  (click)="onExchangeClick()"
                  class="w-full max-w-[125px] sm:max-w-[140px] py-1 sm:py-1.5 px-2 rounded-xl bg-jungle-green hover:bg-jungle-dark text-white font-black text-[10px] sm:text-xs shadow-md transition-all duration-200 cursor-pointer hover:scale-105 flex items-center justify-center space-x-1 animate-pulse"
                >
                  <span>🔄 Pass Card ➔</span>
                </button>
                <span class="text-[8px] sm:text-[9px] text-jungle-green font-bold mt-0.5">
                  or drop here
                </span>
              } @else {
                <div class="text-[10px] sm:text-xs font-black text-jungle-dark uppercase tracking-wide">
                  Your Turn
                </div>
                <p class="text-[8px] sm:text-[9px] text-jungle-muted mt-0.5 leading-tight">
                  Drag card or tap to pass ↻
                </p>
              }
            } @else {
              <div class="text-[10px] sm:text-xs font-bold text-jungle-dark uppercase tracking-wider truncate max-w-[120px] sm:max-w-[140px]">
                {{ activeTurnPlayerName ? activeTurnPlayerName + "'s Turn" : 'Waiting...' }}
              </div>
              <div class="text-[8px] sm:text-[9px] text-jungle-muted mt-0.5">
                Passing clockwise ↻
              </div>
            }
          </div>

          <!-- Bottom Declare Winner Button -->
          <div class="w-full pb-1 border-t border-jungle-green/10 flex justify-center">
            <button 
              type="button"
              (click)="onDeclareWinnerClick()"
              class="w-full max-w-[125px] sm:max-w-[140px] py-0.5 sm:py-1 px-1 rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[10px] transition-all duration-200 flex items-center justify-center space-x-1 cursor-pointer"
              [ngClass]="canDeclareWinner 
                ? 'bg-jungle-gold hover:bg-amber-500 text-jungle-dark border border-amber-400 animate-jungle-pulse shadow-gold-glow scale-105' 
                : 'bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-muted hover:text-jungle-dark border border-jungle-green/15'"
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
