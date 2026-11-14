import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';
import { LeaderboardTableComponent } from '../../shared/components/leaderboard-table/leaderboard-table.component';

@Component({
  selector: 'app-final-champion',
  standalone: true,
  imports: [CommonModule, RouterLink, PlayerAvatarComponent, LeaderboardTableComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-center items-center px-4 py-8">
      <div class="max-w-2xl w-full bg-jungle-cream/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-4 border-jungle-gold shadow-2xl text-center relative overflow-hidden">
        
        <!-- Trophy & Confetti Header -->
        <div class="relative inline-block mb-4">
          <div class="w-24 h-24 rounded-full bg-jungle-gold/20 flex items-center justify-center text-5xl shadow-gold-glow animate-bounce">
            👑
          </div>
          <span class="absolute -bottom-1 -right-1 text-2xl">🏆</span>
        </div>

        <div class="text-xs font-black text-jungle-gold uppercase tracking-widest">
          MATCH FINALE • STAR GAME CHAMPION
        </div>

        <!-- Champion Name & Avatar -->
        <div class="my-4 flex flex-col items-center">
          <app-player-avatar 
            [avatarUrl]="championAvatar()"
            [name]="championName()"
            size="lg"
            [isTurn]="true"
          />
          <h1 class="text-3xl sm:text-4xl font-black text-jungle-dark mt-3">
            {{ championName() }}
          </h1>
          <p class="text-xs font-bold text-jungle-green mt-1">
            Reigned supreme across all jungle rounds!
          </p>
        </div>

        <!-- Final Rankings Table -->
        <div class="my-6 text-left">
          <div class="text-xs font-bold text-jungle-muted uppercase tracking-wider mb-2">
            FINAL MATCH STANDINGS
          </div>
          <app-leaderboard-table [entries]="leaderboard()" />
        </div>

        <!-- Action Controls -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          @if (gameService.isHost()) {
            <button 
              (click)="onPlayAgain()"
              class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-white font-black text-sm shadow-jungle hover:shadow-jungle-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <span>🔄 Play Again (Same Players)</span>
            </button>
          }

          <a 
            routerLink="/"
            class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-jungle-surface/60 hover:bg-jungle-surface text-jungle-dark font-bold text-sm transition-colors text-center"
          >
            ← Return to Home
          </a>
        </div>

      </div>
    </div>
  `,
})
export class FinalChampionComponent {
  public gameService = inject(GameService);
  private router = inject(Router);

  public championName(): string {
    return this.gameService.gameCompleted()?.championPlayerName || 
      this.gameService.roomLeaderboard()[0]?.playerName || 
      'Adventurer';
  }

  public championAvatar(): string {
    return this.gameService.gameCompleted()?.championAvatar || 
      this.gameService.roomLeaderboard()[0]?.avatarUrl || 
      '';
  }

  public leaderboard(): any[] {
    return this.gameService.gameCompleted()?.finalLeaderboard || 
      this.gameService.roomLeaderboard();
  }

  public onPlayAgain(): void {
    this.gameService.requestNextRound();
    this.router.navigate(['/lobby', this.gameService.currentRoom()?.roomId]);
  }
}
