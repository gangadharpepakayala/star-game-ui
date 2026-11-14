import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-join-room',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-center items-center px-4 py-12">
      <div class="max-w-md w-full bg-jungle-cream/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
        
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-jungle-gold text-jungle-dark mx-auto flex items-center justify-center font-black text-2xl shadow-md mb-3">
            🔑
          </div>
          <h2 class="text-2xl font-black text-jungle-dark">Join Game Room</h2>
          <p class="text-xs text-jungle-muted mt-1">Enter a 8-character Room ID from your friend</p>
        </div>

        <form (ngSubmit)="onJoin()" class="space-y-5">
          <!-- Player Name Input -->
          <div>
            <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1.5">
              Your Player Name
            </label>
            <input 
              type="text" 
              name="playerName"
              [(ngModel)]="playerName" 
              required
              maxlength="20"
              placeholder="e.g. JungleKing"
              class="w-full px-4 py-3 rounded-xl bg-jungle-surface/30 border border-jungle-green/30 text-jungle-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:bg-white transition-all"
            />
          </div>

          <!-- Room Code Input -->
          <div>
            <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1.5">
              Room Code
            </label>
            <input 
              type="text" 
              name="roomCode"
              [(ngModel)]="roomCode" 
              required
              maxlength="12"
              placeholder="e.g. STAR8271"
              class="w-full px-4 py-3 rounded-xl bg-jungle-surface/30 border border-jungle-green/30 text-jungle-dark font-mono font-bold text-base uppercase text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-jungle-green focus:bg-white transition-all"
            />
          </div>

          <!-- Password (Optional / For Private Rooms) -->
          <div>
            <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1.5">
              Password <span class="text-jungle-muted font-normal lowercase">(if private)</span>
            </label>
            <input 
              type="password" 
              name="password"
              [(ngModel)]="password" 
              placeholder="Enter passcode if required"
              class="w-full px-4 py-3 rounded-xl bg-jungle-surface/30 border border-jungle-green/30 text-jungle-dark font-medium text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:bg-white transition-all"
            />
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            [disabled]="isJoining || !roomCode.trim()"
            class="w-full py-3.5 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-jungle-cream font-black text-sm shadow-jungle hover:shadow-jungle-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <span>{{ isJoining ? 'Verifying Room...' : 'Enter Arena →' }}</span>
          </button>

          <!-- Back to home -->
          <div class="text-center pt-2">
            <a routerLink="/" class="text-xs font-bold text-jungle-muted hover:text-jungle-dark transition-colors">
              ← Cancel & Return Home
            </a>
          </div>
        </form>

      </div>
    </div>
  `,
})
export class JoinRoomComponent {
  private gameService = inject(GameService);
  private toast = inject(ToastService);

  public playerName = this.gameService.currentPlayer()?.playerName || '';
  public roomCode = '';
  public password = '';
  public isJoining = false;

  public async onJoin(): Promise<void> {
    if (!this.roomCode.trim()) {
      this.toast.error('Please enter a room code.');
      return;
    }

    this.isJoining = true;
    try {
      if (this.playerName.trim()) {
        await this.gameService.updateProfile(this.playerName.trim());
      }

      await this.gameService.joinRoom(this.roomCode.trim().toUpperCase(), this.password ? this.password.trim() : undefined);
    } finally {
      this.isJoining = false;
    }
  }
}
