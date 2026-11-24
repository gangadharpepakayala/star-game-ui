import { Component, Input, Output, EventEmitter, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AudioService } from '../../../core/services/audio.service';
import { ToastService } from '../../../core/services/toast.service';
import { PlayerProfile } from '../../../core/models/game.models';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="w-full bg-jungle-cream/90 backdrop-blur-md border-b border-jungle-green/20 px-2 sm:px-4 py-1.5 sm:py-2.5 sticky top-0 z-40 shadow-xs">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Logo -->
        <a routerLink="/" class="flex items-center space-x-1.5 group">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-jungle-green to-jungle-dark text-jungle-cream flex items-center justify-center font-black text-lg sm:text-xl shadow-xs group-hover:scale-105 transition-transform">
            ✦
          </div>
          <div>
            <div class="font-black text-sm sm:text-lg tracking-tight text-jungle-dark leading-none flex items-center space-x-1">
              <span>STAR GAME</span>
              <span class="text-[10px] sm:text-xs text-jungle-gold">🌿</span>
            </div>
            <div class="hidden xs:block text-[9px] sm:text-[10px] font-semibold text-jungle-muted uppercase tracking-widest leading-tight">
              JUNGLE EDITION
            </div>
          </div>
        </a>

        <!-- Center Room & Round Status -->
        @if (roomCode) {
          <div class="flex items-center space-x-1.5 sm:space-x-3 bg-jungle-surface/50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-jungle-green/20 text-[11px] sm:text-xs">
            <div class="flex items-center space-x-1 font-bold text-jungle-dark">
              <span class="hidden sm:inline text-jungle-muted">Room:</span>
              <span class="font-mono bg-jungle-cream px-1.5 py-0.5 rounded text-jungle-green border border-jungle-green/20">{{ roomCode }}</span>
              <button 
                (click)="copyRoomCode()" 
                class="hover:text-jungle-green p-0.5 transition-colors cursor-pointer"
                title="Copy Room ID"
              >
                📋
              </button>
            </div>

            @if (currentRound && totalRounds) {
              <span class="text-jungle-green/30">|</span>
              <div class="font-bold text-jungle-dark flex items-center space-x-1">
                <span>R{{ currentRound }}/{{ totalRounds }}</span>
              </div>
            }
          </div>
        }

        <!-- Right Side Controls -->
        <div class="flex items-center space-x-1.5 sm:space-x-2.5">
          <!-- Audio Toggle -->
          <button 
            (click)="toggleAudio()"
            class="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark flex items-center justify-center text-xs sm:text-sm shadow-xs transition-transform hover:scale-105 cursor-pointer"
            [title]="audio.isMuted() ? 'Unmute Sound' : 'Mute Sound'"
          >
            {{ audio.isMuted() ? '🔇' : '🔊' }}
          </button>

          <!-- Admin "End Game" Option -->
          @if (isHost && showEndGameButton) {
            <button 
              (click)="showEndGameConfirm.set(true)"
              class="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-[10px] sm:text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center space-x-1"
              title="Stop and end the game"
            >
              <span>⏹️</span>
              <span class="hidden sm:inline">End Game</span>
            </button>
          }

          <!-- Leave Room Button -->
          @if (showLeaveButton) {
            <button 
              (click)="showLeaveConfirm.set(true)"
              class="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-800 text-[10px] sm:text-xs font-bold transition-colors cursor-pointer"
              title="Leave Room"
            >
              Leave
            </button>
          }
        </div>
      </div>
    </header>

    <!-- Confirm Leave Modal -->
    @if (showLeaveConfirm()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
        <div class="max-w-sm w-full bg-jungle-cream rounded-3xl p-5 border-2 border-red-300 shadow-xl text-center space-y-4">
          <div class="text-3xl">🚪</div>
          <h3 class="text-lg font-black text-jungle-dark">Leave Game Room?</h3>
          <p class="text-xs text-jungle-muted">
            Are you sure you want to leave? You can rejoin anytime by entering your room code <strong class="text-jungle-green font-mono font-bold">{{ roomCode }}</strong>.
          </p>
          <div class="flex items-center justify-center gap-3 pt-2">
            <button 
              (click)="showLeaveConfirm.set(false)"
              class="flex-1 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors"
            >
              Stay
            </button>
            <button 
              (click)="confirmLeave()"
              class="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors"
            >
              Yes, Leave
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Confirm End Game Modal (Host only) -->
    @if (showEndGameConfirm()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
        <div class="max-w-sm w-full bg-jungle-cream rounded-3xl p-5 border-2 border-amber-400 shadow-xl text-center space-y-4">
          <div class="text-3xl">⏹️</div>
          <h3 class="text-lg font-black text-jungle-dark">End Game Completely?</h3>
          <p class="text-xs text-jungle-muted">
            As host, ending the game will finalize current scores and crown the Final Champion for everyone.
          </p>
          <div class="flex items-center justify-center gap-3 pt-2">
            <button 
              (click)="showEndGameConfirm.set(false)"
              class="flex-1 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors"
            >
              Cancel
            </button>
            <button 
              (click)="confirmEndGame()"
              class="flex-1 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors"
            >
              End Game Now
            </button>
          </div>
        </div>
      </div>
    }
  `,
})
export class GameHeaderComponent {
  @Input() roomCode?: string;
  @Input() currentRound?: number;
  @Input() totalRounds?: number;
  @Input() player: PlayerProfile | null = null;
  @Input() showLeaveButton = false;
  @Input() isHost = false;
  @Input() showEndGameButton = true;

  @Output() leave = new EventEmitter<void>();
  @Output() endGame = new EventEmitter<void>();

  public showLeaveConfirm = signal<boolean>(false);
  public showEndGameConfirm = signal<boolean>(false);

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

  public confirmLeave(): void {
    this.showLeaveConfirm.set(false);
    if (this.roomCode && typeof window !== 'undefined') {
      localStorage.setItem('star_game_last_room', this.roomCode);
    }
    this.leave.emit();
  }

  public confirmEndGame(): void {
    this.showEndGameConfirm.set(false);
    this.endGame.emit();
  }
}
