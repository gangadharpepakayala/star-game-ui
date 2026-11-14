import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardEntry } from '../../../core/models/game.models';
import { PlayerAvatarComponent } from '../player-avatar/player-avatar.component';

@Component({
  selector: 'app-leaderboard-table',
  standalone: true,
  imports: [CommonModule, PlayerAvatarComponent],
  template: `
    <div class="w-full overflow-hidden rounded-2xl bg-jungle-cream/90 border border-jungle-green/20 shadow-jungle">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-jungle-surface/60 border-b border-jungle-green/20 text-xs font-bold text-jungle-muted uppercase tracking-wider">
              <th class="py-3 px-4">Rank</th>
              <th class="py-3 px-4">Player</th>
              <th class="py-3 px-4 text-center">Round Wins</th>
              <th class="py-3 px-4 text-right">Total Points</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-jungle-green/10 text-sm">
            @for (entry of entries; track entry.playerId) {
              <tr 
                class="hover:bg-jungle-surface/30 transition-colors"
                [ngClass]="{
                  'bg-jungle-gold/15 font-semibold': entry.rank === 1,
                  'bg-jungle-cream': entry.rank !== 1
                }"
              >
                <!-- Rank Medal / Number -->
                <td class="py-3 px-4 whitespace-nowrap">
                  @if (entry.rank === 1) {
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-jungle-gold text-jungle-dark font-black text-xs shadow-sm">
                      🥇 1
                    </span>
                  } @else if (entry.rank === 2) {
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-bold text-xs shadow-sm">
                      🥈 2
                    </span>
                  } @else if (entry.rank === 3) {
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700/20 text-amber-900 font-bold text-xs shadow-sm">
                      🥉 3
                    </span>
                  } @else {
                    <span class="inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-jungle-muted">
                      #{{ entry.rank }}
                    </span>
                  }
                </td>

                <!-- Player Avatar & Name -->
                <td class="py-3 px-4 whitespace-nowrap">
                  <div class="flex items-center space-x-3">
                    <app-player-avatar 
                      [avatarUrl]="entry.avatarUrl" 
                      [name]="entry.playerName" 
                      size="sm" 
                    />
                    <div>
                      <div class="font-bold text-jungle-dark text-sm">{{ entry.playerName }}</div>
                      @if (entry.totalGames !== undefined) {
                        <div class="text-[10px] text-jungle-muted">{{ entry.totalGames }} matches played</div>
                      }
                    </div>
                  </div>
                </td>

                <!-- Round Wins -->
                <td class="py-3 px-4 text-center font-bold text-jungle-dark whitespace-nowrap">
                  {{ entry.roundWins }}
                </td>

                <!-- Points -->
                <td class="py-3 px-4 text-right font-black text-jungle-green whitespace-nowrap text-base">
                  {{ entry.totalPoints }} pts
                </td>
              </tr>
            }

            @if (entries.length === 0) {
              <tr>
                <td colspan="4" class="py-8 text-center text-jungle-muted text-sm italic">
                  No scores recorded yet. Play a round to rise up the leaderboard!
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class LeaderboardTableComponent {
  @Input() entries: LeaderboardEntry[] = [];
}
