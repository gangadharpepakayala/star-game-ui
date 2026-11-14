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
      class="flex flex-col items-center p-3 rounded-2xl bg-jungle-cream/90 backdrop-blur-sm border shadow-jungle transition-all duration-300 min-w-[120px] max-w-[160px]"
      [ngClass]="{
        'border-jungle-gold ring-2 ring-jungle-gold/70 shadow-gold-glow scale-105 bg-jungle-cream': player.isTurn,
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
        size="md"
      />

      <!-- Player Name -->
      <div class="mt-2 text-xs font-bold text-jungle-dark truncate max-w-[130px] text-center">
        {{ player.name }}
      </div>

      <!-- Score & Wins Badge -->
      <div class="flex items-center space-x-1.5 mt-1 text-[11px] font-semibold text-jungle-muted">
        <span class="text-jungle-gold">⭐ {{ player.totalPoints }} pts</span>
        <span>•</span>
        <span>🏆 {{ player.roundWins }}</span>
      </div>

      <!-- Opponent Card Backs Display -->
      <div class="flex items-center justify-center space-x-1 mt-2">
        @for (i of cardIndices; track i) {
          <app-card-back size="sm" />
        }
      </div>

      <!-- Turn Status Text -->
      @if (player.isTurn) {
        <div class="mt-1.5 px-2 py-0.5 rounded-full bg-jungle-gold text-jungle-dark text-[10px] font-black uppercase tracking-wider animate-pulse">
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
