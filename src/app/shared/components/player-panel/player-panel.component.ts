import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPlayerInfo } from '../../../core/models/game.models';
import { PlayerAvatarComponent } from '../player-avatar/player-avatar.component';
import { CardBackComponent } from '../card-back/card-back.component';

@Component({
  selector: 'app-player-panel',
  standalone: true,
  imports: [CommonModule, PlayerAvatarComponent, CardBackComponent],
  template: `
    <div 
      class="flex flex-col items-center p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-jungle-cream/90 backdrop-blur-sm border shadow-sm transition-all duration-300 min-w-[88px] max-w-[115px] xs:min-w-[96px] xs:max-w-[125px] sm:min-w-[130px] sm:max-w-[160px]"
      [ngClass]="{
        'border-jungle-gold ring-2 ring-jungle-gold/70 shadow-gold-glow scale-102 bg-jungle-cream': player.isTurn,
        'border-jungle-green/20': !player.isTurn,
        'opacity-60': !player.isConnected
      }"
    >
      <!-- Avatar with Host badge and Turn glow -->
      <app-player-avatar 
        [avatarUrl]="player.avatarUrl"
        [name]="player.name"
        [isHost]="player.isHost"
        [isTurn]="player.isTurn"
        [isConnected]="player.isConnected"
        size="sm"
      />

      <!-- Player Name -->
      <div class="mt-1 text-[11px] sm:text-xs font-bold text-jungle-dark truncate max-w-[85px] sm:max-w-[130px] text-center">
        {{ player.name }}
      </div>

      <!-- Score & Wins Badge -->
      <div class="flex items-center space-x-1 mt-0.5 text-[9px] sm:text-[11px] font-semibold text-jungle-muted">
        <span class="text-jungle-gold font-bold">⭐ {{ player.totalPoints }}</span>
        <span>•</span>
        <span>🏆 {{ player.roundWins }}</span>
      </div>

      <!-- Opponent Card Backs Display -->
      <div class="flex items-center justify-center space-x-0.5 sm:space-x-1 mt-1">
        @for (i of cardIndices; track i) {
          <div class="scale-80 sm:scale-100 origin-center">
            <app-card-back size="sm" />
          </div>
        }
      </div>

      <!-- Turn Status Text -->
      @if (player.isTurn) {
        <div class="mt-1 px-1.5 py-0.5 rounded-full bg-jungle-gold text-jungle-dark text-[8px] sm:text-[10px] font-black uppercase tracking-wider animate-pulse">
          Exchanging...
        </div>
      }
    </div>
  `,
})
export class PlayerPanelComponent {
  @Input({ required: true }) player!: PublicPlayerInfo;

  public get cardIndices(): number[] {
    const count = this.player.cardCount || 4;
    return Array.from({ length: Math.min(count, 4) }, (_, i) => i);
  }
}
