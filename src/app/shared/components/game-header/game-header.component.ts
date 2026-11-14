import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AudioService } from '../../../core/services/audio.service';
import { ToastService } from '../../../core/services/toast.service';
import { PlayerProfile } from '../../../core/models/game.models';
import { PlayerAvatarComponent } from '../player-avatar/player-avatar.component';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [CommonModule, RouterLink, PlayerAvatarComponent],
  template: `
    <header class="w-full bg-jungle-cream/80 backdrop-blur-md border-b border-jungle-green/20 px-4 py-3 sticky top-0 z-40 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-jungle-green to-jungle-dark text-jungle-cream flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            ✦
          </div>
          <div>
            <div class="font-black text-lg tracking-tight text-jungle-dark leading-none flex items-center space-x-1">
              <span>STAR GAME</span>
              <span class="text-xs text-jungle-gold">🌿</span>
            </div>
            <div class="text-[10px] font-semibold text-jungle-muted uppercase tracking-widest leading-tight">
              JUNGLE EDITION
            </div>
          </div>
        </a>

        <!-- Center Room & Round Status (if in game/room) -->
        @if (roomCode) {
          <div class="hidden sm:flex items-center space-x-3 bg-jungle-surface/40 px-3 py-1.5 rounded-full border border-jungle-green/20">
            <div class="flex items-center space-x-1 text-xs font-bold text-jungle-dark">
              <span class="text-jungle-muted">Room:</span>
              <span class="font-mono bg-jungle-cream px-2 py-0.5 rounded text-jungle-green border border-jungle-green/20">{{ roomCode }}</span>
              <button 
                (click)="copyRoomCode()" 
                class="hover:text-jungle-green p-1 transition-colors"
                title="Copy Room ID"
              >
                📋
              </button>
            </div>

            @if (currentRound && totalRounds) {
              <span class="text-jungle-green/30">|</span>
              <div class="text-xs font-bold text-jungle-dark flex items-center space-x-1">
                <span>Round</span>
                <span class="text-jungle-green">{{ currentRound }}</span>
                <span class="text-jungle-muted">/</span>
                <span>{{ totalRounds }}</span>
              </div>
            }
          </div>
        }

        <!-- Right Side Player Profile & Controls -->
        <div class="flex items-center space-x-2 sm:space-x-3">
          <!-- Audio Toggle -->
          <button 
            (click)="toggleAudio()"
            class="w-9 h-9 rounded-xl bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark flex items-center justify-center text-sm shadow-sm transition-transform hover:scale-105"
            [title]="audio.isMuted() ? 'Unmute Sound' : 'Mute Sound'"
          >
            {{ audio.isMuted() ? '🔇' : '🔊' }}
          </button>

          <!-- Player Profile Preview -->
          @if (player) {
            <a 
              routerLink="/profile" 
              class="flex items-center space-x-2 bg-jungle-surface/40 hover:bg-jungle-surface/70 px-2.5 py-1.5 rounded-xl border border-jungle-green/20 transition-all"
            >
              <app-player-avatar 
                [avatarUrl]="player.avatarUrl" 
                [name]="player.playerName" 
                size="sm" 
              />
              <span class="hidden md:inline text-xs font-bold text-jungle-dark truncate max-w-[100px]">
                {{ player.playerName }}
              </span>
            </a>
          }

          <!-- Leave Room Button (if in a room) -->
          @if (showLeaveButton) {
            <button 
              (click)="onLeaveClick()"
              class="px-2.5 py-1.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold transition-colors"
              title="Leave Room"
            >
              Leave
            </button>
          }
        </div>
      </div>
    </header>
  `,
})
export class GameHeaderComponent {
  @Input() roomCode?: string;
  @Input() currentRound?: number;
  @Input() totalRounds?: number;
  @Input() player: PlayerProfile | null = null;
  @Input() showLeaveButton = false;

  @Output() leave = new EventEmitter<void>();

  public audio = inject(AudioService);
  private toast = inject(ToastService);

  public toggleAudio(): void {
    const isMuted = this.audio.toggleMute();
    this.toast.info(isMuted ? 'Sound muted' : 'Sound unmuted');
  }

  public copyRoomCode(): void {
    if (this.roomCode) {
      navigator.clipboard.writeText(this.roomCode);
      this.toast.success(`Room ID ${this.roomCode} copied to clipboard!`);
    }
  }

  public onLeaveClick(): void {
    this.leave.emit();
  }
}
