import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-back',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="relative rounded-xl border border-jungle-green/30 bg-gradient-to-br from-jungle-green to-jungle-dark shadow-md flex flex-col items-center justify-center select-none overflow-hidden"
      [ngClass]="{
        'w-10 h-14': size === 'sm',
        'w-14 h-20': size === 'md',
        'w-20 h-28': size === 'lg'
      }"
    >
      <!-- Botanical pattern background -->
      <div class="absolute inset-1 rounded-lg border border-jungle-gold/40 flex items-center justify-center opacity-85">
        <div class="w-full h-full flex flex-col items-center justify-center p-1 text-center">
          <span class="text-jungle-gold font-black" [ngClass]="size === 'sm' ? 'text-xs' : 'text-base'">✦</span>
          <span class="text-[8px] font-bold tracking-widest text-jungle-cream/70 uppercase">STAR</span>
        </div>
      </div>

      <!-- Card index/count corner indicator -->
      @if (badge) {
        <div class="absolute bottom-1 right-1 px-1 rounded bg-black/40 text-[9px] font-bold text-jungle-gold">
          {{ badge }}
        </div>
      }
    </div>
  `,
})
export class CardBackComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() badge?: string | number;
}
