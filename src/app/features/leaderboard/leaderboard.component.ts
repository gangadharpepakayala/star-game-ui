import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { GameService } from '../../core/services/game.service';
import { LeaderboardTableComponent } from '../../shared/components/leaderboard-table/leaderboard-table.component';
import { LeaderboardEntry } from '../../core/models/game.models';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, RouterLink, LeaderboardTableComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col">
      <main class="flex-1 max-w-4xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div class="text-xs font-bold text-jungle-muted uppercase tracking-wider">HALL OF ADVENTURERS</div>
            <h1 class="text-3xl sm:text-4xl font-black text-jungle-dark">Global Leaderboard</h1>
          </div>
          <a 
            routerLink="/" 
            class="px-4 py-2.5 rounded-xl bg-jungle-cream border border-jungle-green/20 text-xs font-bold text-jungle-dark hover:bg-white transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        <!-- Global Rankings Table -->
        <app-leaderboard-table [entries]="entries()" />

      </main>
    </div>
  `,
})
export class LeaderboardComponent implements OnInit {
  private api = inject(ApiService);
  public gameService = inject(GameService);
  public entries = signal<LeaderboardEntry[]>([]);

  public async ngOnInit(): Promise<void> {
    try {
      const res = await this.api.getGlobalLeaderboard();
      this.entries.set(res.leaderboard || []);
    } catch {}
  }
}
