import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';
import { LeaderboardTableComponent } from '../../shared/components/leaderboard-table/leaderboard-table.component';
import { LeaderboardEntry } from '../../core/models/game.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PlayerAvatarComponent, LeaderboardTableComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col">
      <!-- Main Container -->
      <main class="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col space-y-10">
        
        <!-- Hero Section -->
        <section class="text-center relative">
          <div class="inline-flex items-center space-x-2 bg-jungle-surface/80 px-4 py-1.5 rounded-full border border-jungle-green/20 mb-4 shadow-sm">
            <span class="text-xs font-bold text-jungle-dark tracking-wide">🌿 REAL-TIME MULTIPLAYER CARD ADVENTURE</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black text-jungle-dark tracking-tight leading-tight">
            STAR <span class="text-jungle-green">GAME</span>
          </h1>

          <p class="max-w-2xl mx-auto mt-3 text-sm sm:text-base text-jungle-muted leading-relaxed">
            Create or join a room, submit your unique card type, and exchange cards clockwise in real time. 
            The first adventurer to gather all four copies wins the round!
          </p>

          <!-- Action Buttons -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a 
              routerLink="/create-room"
              class="px-8 py-3.5 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-jungle-cream font-black text-base shadow-jungle hover:shadow-jungle-lg hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>🌿 Create Room</span>
            </a>

            <a 
              routerLink="/join-room"
              class="px-8 py-3.5 rounded-2xl bg-jungle-cream hover:bg-white text-jungle-dark border-2 border-jungle-green/30 font-black text-base shadow-sm hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>🔑 Join with Code</span>
            </a>
          </div>
        </section>

        <!-- Player Profile & Stats Card -->
        @if (gameService.currentPlayer(); as player) {
          <section class="bg-jungle-cream/90 backdrop-blur-md rounded-3xl p-6 border border-jungle-green/20 shadow-jungle">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div class="flex items-center space-x-4">
                <app-player-avatar 
                  [avatarUrl]="player.avatarUrl" 
                  [name]="player.playerName" 
                  size="lg" 
                />
                <div>
                  <div class="text-xs font-bold text-jungle-muted uppercase tracking-wider">Adventurer</div>
                  <h2 class="text-xl sm:text-2xl font-black text-jungle-dark">{{ player.playerName }}</h2>
                  <a routerLink="/profile" class="text-xs font-semibold text-jungle-green hover:underline mt-0.5 inline-block">
                    ✏️ Customize Profile & Avatar
                  </a>
                </div>
              </div>

              <!-- Lifetime Stats Cards -->
              <div class="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                <div class="bg-jungle-surface/40 p-3 sm:p-4 rounded-2xl border border-jungle-green/10">
                  <div class="text-xs font-semibold text-jungle-muted">Matches</div>
                  <div class="text-xl sm:text-2xl font-black text-jungle-dark mt-0.5">{{ stats()?.gamesplayed || 0 }}</div>
                </div>
                <div class="bg-jungle-surface/40 p-3 sm:p-4 rounded-2xl border border-jungle-green/10">
                  <div class="text-xs font-semibold text-jungle-muted">Rounds Won</div>
                  <div class="text-xl sm:text-2xl font-black text-jungle-gold mt-0.5">{{ stats()?.roundswon || 0 }}</div>
                </div>
                <div class="bg-jungle-surface/40 p-3 sm:p-4 rounded-2xl border border-jungle-green/10">
                  <div class="text-xs font-semibold text-jungle-muted">Total Points</div>
                  <div class="text-xl sm:text-2xl font-black text-jungle-green mt-0.5">{{ stats()?.totalpoints || 0 }}</div>
                </div>
              </div>
            </div>
          </section>
        }

        <!-- Public Rooms Section -->
        <section class="flex flex-col space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-black text-jungle-dark flex items-center space-x-2">
              <span>🏕️ Active Public Rooms</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-jungle-green/15 text-jungle-green">
                {{ publicRooms().length }} open
              </span>
            </h3>
            <button 
              (click)="loadPublicRooms()" 
              class="text-xs font-bold text-jungle-green hover:underline flex items-center space-x-1"
            >
              <span>↻ Refresh</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            @for (room of publicRooms(); track room.id) {
              <div class="p-5 rounded-2xl bg-jungle-cream/80 border border-jungle-green/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs font-bold bg-jungle-surface px-2 py-0.5 rounded text-jungle-green border border-jungle-green/20">
                      {{ room.roomcode }}
                    </span>
                    <span class="text-xs font-bold text-jungle-muted">
                      👥 {{ room.currentplayers || 1 }} / {{ room.maxplayers }}
                    </span>
                  </div>
                  <h4 class="text-base font-bold text-jungle-dark mt-2 truncate">{{ room.roomname }}</h4>
                  <div class="text-xs text-jungle-muted mt-1">{{ room.totalrounds }} Rounds match</div>
                </div>

                <button 
                  (click)="joinPublicRoom(room.roomcode)"
                  class="w-full py-2 px-4 rounded-xl bg-jungle-green hover:bg-jungle-dark text-white font-bold text-xs shadow-sm transition-colors text-center"
                >
                  Join Room →
                </button>
              </div>
            }

            @if (publicRooms().length === 0) {
              <div class="col-span-full p-8 text-center bg-jungle-cream/40 rounded-2xl border border-dashed border-jungle-green/20 text-jungle-muted text-sm">
                No open public rooms found. Be the first adventurer to create one!
              </div>
            }
          </div>
        </section>

        <!-- Global Leaderboard Preview -->
        <section class="flex flex-col space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-black text-jungle-dark">🏆 Global Leaderboard</h3>
            <a routerLink="/leaderboard" class="text-xs font-bold text-jungle-green hover:underline">
              View All Rankings →
            </a>
          </div>

          <app-leaderboard-table [entries]="topPlayers()" />
        </section>

      </main>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  public gameService = inject(GameService);
  private api = inject(ApiService);
  private toast = inject(ToastService);

  public stats = signal<any>(null);
  public publicRooms = signal<any[]>([]);
  public topPlayers = signal<LeaderboardEntry[]>([]);

  public async ngOnInit(): Promise<void> {
    await this.loadStats();
    await this.loadPublicRooms();
    await this.loadLeaderboard();
  }

  public async loadStats(): Promise<void> {
    const token = this.gameService.sessionToken();
    if (token) {
      try {
        const res = await this.api.getProfile(token);
        this.stats.set(res.stats);
      } catch {}
    }
  }

  public async loadPublicRooms(): Promise<void> {
    try {
      const res = await this.api.getPublicRooms();
      this.publicRooms.set(res.rooms || []);
    } catch {}
  }

  public async loadLeaderboard(): Promise<void> {
    try {
      const res = await this.api.getGlobalLeaderboard();
      this.topPlayers.set((res.leaderboard || []).slice(0, 5));
    } catch {}
  }

  public async joinPublicRoom(code: string): Promise<void> {
    await this.gameService.joinRoom(code);
  }
}
