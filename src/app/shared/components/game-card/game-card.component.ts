import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicalCard } from '../../../core/models/game.models';
import { getCardEmoji } from '../../../core/models/card-symbols';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      (click)="onClick()"
      class="group relative rounded-xl sm:rounded-2xl bg-jungle-cream border-2 transition-all duration-200 cursor-pointer select-none overflow-hidden flex flex-col justify-between shadow-jungle hover:shadow-jungle-lg hover:-translate-y-1"
      [ngClass]="{
        'border-jungle-gold ring-2 sm:ring-4 ring-jungle-gold/50 -translate-y-1.5 shadow-gold-glow': isSelected,
        'border-jungle-green/30 hover:border-jungle-green': !isSelected,
        'w-[72px] h-[106px] xs:w-20 xs:h-28 sm:w-28 sm:h-40 md:w-32 md:h-46': size === 'md',
        'w-16 h-22 sm:w-20 sm:h-28': size === 'sm',
        'w-32 h-48 sm:w-40 sm:h-60': size === 'lg'
      }"
    >
      <!-- Top header with mini badge & title -->
      <div 
        class="flex items-center justify-between z-10 px-1 py-0.5 sm:px-2 sm:py-1"
      >
        <span 
          class="font-black tracking-wider text-jungle-green uppercase truncate text-[8px] xs:text-[9px] sm:text-[10px]"
        >
          ✦ {{ card.cardName || 'STAR' }}
        </span>
        @if (isSelected) {
          <span class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-jungle-gold text-jungle-dark text-[9px] sm:text-[10px] font-bold flex items-center justify-center">✓</span>
        }
      </div>

      <!-- Center artwork: custom image or botanical jungle glyph -->
      <div class="flex-1 flex flex-col items-center justify-center p-0.5 sm:p-1 relative">
        @if (card.cardImageUrl) {
          <img 
            [src]="card.cardImageUrl" 
            [alt]="card.cardName" 
            class="object-contain rounded drop-shadow-sm transition-transform group-hover:scale-105 max-h-[44px] max-w-[44px] sm:max-h-[64px] sm:max-w-[64px]"
          />
        } @else {
          <!-- Predefined Jungle / Nature Adventure Glyph -->
          <div 
            class="rounded-full bg-jungle-surface/50 border border-jungle-green/20 flex items-center justify-center shadow-inner w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14 text-lg xs:text-xl sm:text-2xl"
          >
            {{ getJungleEmoji(card.cardName) }}
          </div>
        }

        <!-- Subtle corner leaf flourishes -->
        <span class="absolute top-0 right-0.5 text-[8px] sm:text-[10px] text-jungle-green/30 pointer-events-none">🌿</span>
        <span class="absolute bottom-0 left-0.5 text-[8px] sm:text-[10px] text-jungle-green/30 pointer-events-none">🍃</span>
      </div>

      <!-- Card name banner at bottom -->
      <div 
        class="bg-gradient-to-t from-jungle-dark to-jungle-green text-center z-10 py-0.5 px-1 sm:py-1 sm:px-1.5"
      >
        <div 
          class="font-bold tracking-wide text-jungle-cream truncate text-[8px] xs:text-[9px] sm:text-xs"
        >
          {{ card.cardName }}
        </div>
      </div>
    </div>
  `,
})
export class GameCardComponent {
  @Input({ required: true }) card!: PhysicalCard;
  @Input() isSelected = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() cardSelected = new EventEmitter<string>();

  public onClick(): void {
    this.cardSelected.emit(this.card.id);
  }

  public getJungleEmoji(name?: string): string {
    return getCardEmoji(name || '');
  }
}
