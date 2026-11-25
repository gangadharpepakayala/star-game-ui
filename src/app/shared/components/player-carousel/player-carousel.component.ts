import { Component, Input, ElementRef, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPlayerInfo } from '../../../core/models/game.models';
import { PlayerAvatarComponent } from '../player-avatar/player-avatar.component';

@Component({
  selector: 'app-player-carousel',
  standalone: true,
  imports: [CommonModule, PlayerAvatarComponent],
  template: `
    <div class="relative w-full max-w-5xl mx-auto px-1 sm:px-4 select-none">
      
      <!-- Left Scroll Arrow (Desktop / Wide screen) -->
      @if (players.length > 3) {
        <button 
          (click)="scrollPrev()" 
          type="button"
          class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-jungle-cream/95 hover:bg-white text-jungle-dark shadow-md border border-jungle-green/20 items-center justify-center text-sm font-bold transition-all hover:scale-110 cursor-pointer"
          title="Scroll Left"
        >
          ‹
        </button>
      }

      <!-- Horizontal Carousel Track (Swipeable, No Scrollbar, Smooth Snap, Never Clips Cards) -->
      <div 
        #carouselTrack
        class="flex items-center gap-2 sm:gap-3.5 overflow-x-auto py-2 px-3 sm:px-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-px-3 sm:scroll-px-8"
        [ngClass]="players.length <= 3 ? 'justify-center' : 'justify-start'"
      >
        @for (player of players; track player.id) {
          <div 
            [attr.id]="'player-card-' + player.id"
            class="snap-center flex-shrink-0 transition-all duration-300 transform"
            [ngClass]="{
              'scale-105 z-10': player.id === activePlayerId,
              'scale-95 opacity-85 hover:opacity-100': player.id !== activePlayerId
            }"
          >
            <!-- Player Card -->
            <div 
              class="flex flex-col items-center p-2 sm:p-2.5 rounded-2xl backdrop-blur-md border shadow-md transition-all duration-300 w-[96px] xs:w-[106px] sm:w-[126px]"
              [ngClass]="{
                'border-jungle-gold ring-3 ring-jungle-gold/80 shadow-gold-glow bg-gradient-to-b from-[#FFFDF2] to-[#F5EED0]': player.id === activePlayerId,
                'border-jungle-green/25 bg-jungle-cream/90 hover:border-jungle-green/50': player.id !== activePlayerId,
                'opacity-60': !player.isConnected
              }"
            >
              <!-- Turn Indicator Pill on top of card -->
              @if (player.id === activePlayerId) {
                <div class="mb-1 px-2 py-0.5 rounded-full bg-jungle-gold text-jungle-dark text-[9px] font-black uppercase tracking-wider shadow-xs animate-bounce flex items-center space-x-0.5">
                  <span>⚡</span>
                  <span>TURN</span>
                </div>
              } @else {
                <div class="mb-1 h-[17px]"></div>
              }

              <!-- Avatar with Host & Status -->
              <app-player-avatar 
                [avatarUrl]="player.avatarUrl"
                [name]="player.name"
                [isHost]="player.isHost"
                [isTurn]="player.id === activePlayerId"
                [isConnected]="player.isConnected"
                size="sm"
              />

              <!-- Player Name with optional '(You)' tag -->
              <div class="mt-1 text-center w-full px-1">
                <div class="text-[11px] sm:text-xs font-black text-jungle-dark truncate leading-tight">
                  {{ player.name }}
                </div>
                @if (player.id === currentPlayerId) {
                  <span class="inline-block px-1.5 py-0.2 rounded-full bg-jungle-green/20 text-jungle-green text-[8px] font-black tracking-tight">
                    YOU
                  </span>
                }
              </div>

              <!-- Score & Wins Badge -->
              <div class="flex items-center space-x-1 mt-0.5 text-[9px] sm:text-[10px] font-bold text-jungle-muted">
                <span class="text-jungle-gold">★ {{ player.totalPoints }}</span>
                <span>•</span>
                <span>🏆 {{ player.roundWins }}</span>
              </div>

              <!-- Card Backs / Count (4 cards) - Compact neatly fanned mini cards -->
              <div class="flex items-center justify-center -space-x-1.5 mt-1.5 py-0.5">
                @for (i of getCardSlots(player.cardCount); track i) {
                  <div 
                    class="w-4 h-6 xs:w-4.5 xs:h-6.5 sm:w-5 sm:h-7 rounded-sm bg-gradient-to-br from-[#1E3F20] to-[#122613] border border-jungle-gold/50 shadow-xs flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    title="Hidden Card"
                  >
                    <span class="text-[7px] xs:text-[8px] text-jungle-gold font-bold">✦</span>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Right Scroll Arrow (Desktop / Wide screen) -->
      @if (players.length > 3) {
        <button 
          (click)="scrollNext()" 
          type="button"
          class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-jungle-cream/95 hover:bg-white text-jungle-dark shadow-md border border-jungle-green/20 items-center justify-center text-sm font-bold transition-all hover:scale-110 cursor-pointer"
          title="Scroll Right"
        >
          ›
        </button>
      }

    </div>
  `,
})
export class PlayerCarouselComponent implements OnChanges, AfterViewInit {
  @Input({ required: true }) players: PublicPlayerInfo[] = [];
  @Input() activePlayerId: string | null = null;
  @Input() currentPlayerId: string | null = null;

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['activePlayerId'] && !changes['activePlayerId'].firstChange) {
      this.scrollToActivePlayer();
    }
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.scrollToActivePlayer(), 300);
  }

  public scrollToActivePlayer(): void {
    if (!this.activePlayerId || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const target = track.querySelector(`#player-card-${this.activePlayerId}`) as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  public scrollPrev(): void {
    if (!this.carouselTrack) return;
    this.carouselTrack.nativeElement.scrollBy({ left: -180, behavior: 'smooth' });
  }

  public scrollNext(): void {
    if (!this.carouselTrack) return;
    this.carouselTrack.nativeElement.scrollBy({ left: 180, behavior: 'smooth' });
  }

  public getCardSlots(count?: number): number[] {
    const num = count ?? 4;
    return Array.from({ length: Math.min(Math.max(num, 0), 4) }, (_, i) => i);
  }
}
