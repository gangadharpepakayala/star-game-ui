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
    <div class="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-2 py-1 select-none">
      
      <!-- Circular Opponents Orbit (Shown in Clockwise order from player's POV) -->
      <div class="w-full flex items-center justify-center gap-2 xs:gap-3 sm:gap-6 mb-2 sm:mb-4 overflow-x-auto py-1">
        @for (player of opponents; track player.id; let idx = $index) {
          <div class="flex items-center space-x-1.5 xs:space-x-2">
            <app-player-panel [player]="player" />
            @if (idx < opponents.length - 1) {
              <span class="text-jungle-green/60 text-xs font-black hidden xs:inline animate-pulse">➔</span>
            }
          </div>
        }
      </div>

      <!-- Main Jungle Game Board Table -->
      <div 
        class="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-76 sm:h-76 md:w-88 md:h-88 rounded-full bg-gradient-to-b from-[#D4E8C2] to-[#B8D79E] border-4 sm:border-8 border-jungle-green/40 shadow-xl flex flex-col items-center justify-center p-2 sm:p-4"
      >
        <!-- Botanical ring pattern inside table -->
        <div class="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-jungle-green/30 pointer-events-none"></div>

        <!-- Clockwise Animated SVG Arrows (No text, pure rotating directional arrows) -->
        <svg 
          viewBox="0 0 100 100" 
          class="absolute inset-0 w-full h-full pointer-events-none animate-spin" 
          style="animation-duration: 20s;"
        >
          <!-- Curved Clockwise Arrows around circle perimeter -->
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#D9A441" />
            </marker>
          </defs>
          <!-- Arc 1 -->
          <path d="M 50 8 A 42 42 0 0 1 92 50" fill="none" stroke="#D9A441" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrow)" opacity="0.85" />
          <!-- Arc 2 -->
          <path d="M 92 50 A 42 42 0 0 1 50 92" fill="none" stroke="#D9A441" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrow)" opacity="0.85" />
          <!-- Arc 3 -->
          <path d="M 50 92 A 42 42 0 0 1 8 50" fill="none" stroke="#D9A441" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrow)" opacity="0.85" />
          <!-- Arc 4 -->
          <path d="M 8 50 A 42 42 0 0 1 50 8" fill="none" stroke="#D9A441" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrow)" opacity="0.85" />
        </svg>

        <!-- Central Table Exchange Drop Zone -->
        <div 
          cdkDropList
          id="table-exchange-dropzone"
          (cdkDropListDropped)="onDropCardOnTable($event)"
          class="relative z-10 w-36 h-36 xs:w-42 xs:h-42 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-jungle-cream/95 backdrop-blur-md border-2 border-jungle-green/30 shadow-inner flex flex-col items-center justify-center p-2 xs:p-3 text-center transition-all duration-300"
          [ngClass]="{
            'border-jungle-gold ring-3 sm:ring-4 ring-jungle-gold/50 bg-jungle-cream shadow-gold-glow': isMyTurn,
            'opacity-95': !isMyTurn
          }"
        >
          <!-- Turn Timer in Center -->
          <div class="flex items-center space-x-1 mb-0.5">
            <span class="text-[11px] sm:text-xs">⏱️</span>
            <span 
              class="font-black text-xs xs:text-sm tracking-wider"
              [ngClass]="turnTimeRemaining <= 5 ? 'text-red-600 animate-ping' : 'text-jungle-dark'"
            >
              {{ turnTimeRemaining }}s
            </span>
          </div>

          <!-- Turn Status Instruction -->
          @if (isMyTurn) {
            <div class="text-[10px] xs:text-xs font-black text-jungle-dark uppercase tracking-wide mb-1 xs:mb-1.5 animate-bounce">
              ⚡ YOUR TURN ⚡
            </div>

            <!-- Exchange Card Button -->
            <button 
              (click)="onExchangeClick()"
              [disabled]="!selectedCardId"
              class="w-full max-w-[130px] xs:max-w-[150px] py-1 xs:py-1.5 px-2 rounded-lg xs:rounded-xl font-bold text-[10px] xs:text-xs shadow-md transition-all duration-200 flex items-center justify-center space-x-1"
              [ngClass]="selectedCardId 
                ? 'bg-jungle-green hover:bg-jungle-dark text-white cursor-pointer hover:scale-105 shadow-jungle' 
                : 'bg-jungle-surface/80 text-jungle-muted cursor-not-allowed'"
            >
              <span>🔄 Exchange Card</span>
            </button>

            <p class="text-[8px] xs:text-[9px] text-jungle-muted mt-0.5 xs:mt-1 truncate max-w-[140px]">
              {{ selectedCardId ? 'Click button or drop card' : 'Select a card below to pass' }}
            </p>
          } @else {
            <div class="text-[10px] xs:text-xs font-bold text-jungle-dark uppercase tracking-wider truncate max-w-[130px]">
              {{ activeTurnPlayerName ? activeTurnPlayerName + "'s Turn" : 'Passing Cards...' }}
            </div>
            <div class="text-[8px] xs:text-[9px] text-jungle-muted mt-0.5">
              Passing clockwise ↻
            </div>
          }

          <!-- Declare Winner Button -->
          <div class="mt-1 w-full pt-1 border-t border-jungle-green/10 flex justify-center">
            <button 
              (click)="onDeclareWinnerClick()"
              class="w-full max-w-[130px] xs:max-w-[150px] py-1 px-1.5 rounded-lg xs:rounded-xl font-black text-[9px] xs:text-[11px] transition-all duration-200 flex items-center justify-center space-x-1 border shadow-xs"
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
