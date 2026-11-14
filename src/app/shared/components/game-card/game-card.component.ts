import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicalCard } from '../../../core/models/game.models';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      (click)="onClick()"
      class="group relative rounded-2xl bg-jungle-cream border-2 transition-all duration-200 cursor-pointer select-none overflow-hidden flex flex-col justify-between shadow-jungle hover:shadow-jungle-lg hover:-translate-y-1.5"
      [ngClass]="{
        'border-jungle-gold ring-4 ring-jungle-gold/50 -translate-y-2 shadow-gold-glow': isSelected,
        'border-jungle-green/30 hover:border-jungle-green': !isSelected,
        'w-28 h-40 sm:w-32 sm:h-48 md:w-36 md:h-52': size === 'md',
        'w-20 h-28': size === 'sm',
        'w-40 h-60': size === 'lg'
      }"
    >
      <!-- Top header with mini badge & title -->
      <div 
        class="flex items-center justify-between z-10"
        [ngClass]="size === 'sm' ? 'p-1 px-1.5' : 'p-2 sm:p-2.5'"
      >
        <span 
          class="font-black tracking-wider text-jungle-green uppercase truncate"
          [ngClass]="size === 'sm' ? 'text-[9px] max-w-[55px]' : 'text-[10px] sm:text-xs max-w-[90px]'"
        >
          ✦ {{ card.cardName || 'STAR' }}
        </span>
        @if (isSelected) {
          <span class="w-4 h-4 rounded-full bg-jungle-gold text-jungle-dark text-[10px] font-bold flex items-center justify-center">✓</span>
        }
      </div>

      <!-- Center artwork: custom image or botanical jungle glyph -->
      <div class="flex-1 flex flex-col items-center justify-center p-1 sm:p-2 relative">
        @if (card.cardImageUrl) {
          <img 
            [src]="card.cardImageUrl" 
            [alt]="card.cardName" 
            class="object-contain rounded-lg drop-shadow-sm transition-transform group-hover:scale-105"
            [ngClass]="size === 'sm' ? 'w-8 h-8' : 'w-16 h-16 sm:w-20 sm:h-20'"
          />
        } @else {
          <!-- Default Jungle Adventure Glyph -->
          <div 
            class="rounded-full bg-jungle-surface/50 border border-jungle-green/20 flex items-center justify-center shadow-inner"
            [ngClass]="size === 'sm' ? 'w-8 h-8 text-base' : 'w-14 h-14 sm:w-16 sm:h-16 text-2xl sm:text-3xl'"
          >
            {{ getJungleEmoji(card.cardName) }}
          </div>
        }

        <!-- Subtle corner leaf flourishes -->
        <span class="absolute top-0 right-1 text-[10px] text-jungle-green/30 pointer-events-none">🌿</span>
        <span class="absolute bottom-0 left-1 text-[10px] text-jungle-green/30 pointer-events-none">🍃</span>
      </div>

      <!-- Card name banner at bottom -->
      <div 
        class="bg-gradient-to-t from-jungle-dark to-jungle-green text-center z-10"
        [ngClass]="size === 'sm' ? 'py-0.5 px-1' : 'p-2'"
      >
        <div 
          class="font-bold tracking-wide text-jungle-cream truncate"
          [ngClass]="size === 'sm' ? 'text-[9px]' : 'text-xs sm:text-sm'"
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

  public getJungleEmoji(name: string): string {
    const lower = name.toLowerCase();
    if (lower.includes('dragon')) return '🐉';
    if (lower.includes('tiger')) return '🐅';
    if (lower.includes('lion')) return '🦁';
    if (lower.includes('phoenix') || lower.includes('bird')) return '🦅';
    if (lower.includes('monkey')) return '🐒';
    if (lower.includes('snake')) return '🐍';
    if (lower.includes('jaguar') || lower.includes('panther')) return '🐆';
    if (lower.includes('elephant')) return '🐘';
    if (lower.includes('star')) return '⭐';
    if (lower.includes('flower') || lower.includes('lotus')) return '🌺';
    return '🌿';
  }
}
