import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AudioService } from '../../core/services/audio.service';
import { GameService } from '../../core/services/game.service';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-center items-center px-4 py-12">
      <div class="max-w-md w-full bg-jungle-cream/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
        
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-jungle-surface text-jungle-dark mx-auto flex items-center justify-center font-black text-2xl shadow-sm mb-3">
            ⚙️
          </div>
          <h2 class="text-2xl font-black text-jungle-dark">Game Settings</h2>
          <p class="text-xs text-jungle-muted mt-1">Configure audio and experience</p>
        </div>

        <div class="space-y-4">
          <!-- Audio Toggle -->
          <div class="flex items-center justify-between p-4 rounded-2xl bg-jungle-surface/30 border border-jungle-green/20">
            <div>
              <div class="font-bold text-sm text-jungle-dark">Game Sound Effects</div>
              <div class="text-[11px] text-jungle-muted">Procedural chimes, deal swooshes & fanfare</div>
            </div>
            <button 
              (click)="audio.toggleMute()"
              class="px-3.5 py-1.5 rounded-xl font-bold text-xs transition-colors"
              [ngClass]="audio.isMuted() ? 'bg-gray-200 text-gray-700' : 'bg-jungle-green text-white'"
            >
              {{ audio.isMuted() ? 'MUTED' : 'ENABLED' }}
            </button>
          </div>

          <!-- Backend Server Configuration -->
          <div class="p-4 rounded-2xl bg-jungle-surface/30 border border-jungle-green/20 space-y-2">
            <div>
              <div class="font-bold text-sm text-jungle-dark">Backend Server URL</div>
              <div class="text-[11px] text-jungle-muted">Cloudflare Worker API endpoint for multiplayer</div>
            </div>
            <div class="flex items-center space-x-2">
              <input 
                type="text" 
                [(ngModel)]="apiUrl"
                placeholder="https://star-game-api.<subdomain>.workers.dev"
                class="flex-1 px-3 py-2 rounded-xl bg-white border border-jungle-green/30 text-xs font-mono text-jungle-dark focus:outline-none focus:ring-1 focus:ring-jungle-green"
              />
              <button 
                (click)="onSaveApiUrl()"
                class="px-3 py-2 rounded-xl bg-jungle-green hover:bg-jungle-dark text-white font-bold text-xs transition-colors"
              >
                Save
              </button>
            </div>
          </div>

          <!-- Rules Summary -->
          <div class="p-4 rounded-2xl bg-jungle-surface/20 border border-jungle-green/20 text-xs text-jungle-dark space-y-2">
            <div class="font-bold uppercase tracking-wider text-jungle-green">Quick Jungle Rules:</div>
            <ul class="list-disc list-inside space-y-1 text-jungle-muted">
              <li>Each player submits 1 unique card name.</li>
              <li>4 copies of every card are generated and dealt.</li>
              <li>Pass 1 card clockwise each turn within 30 seconds.</li>
              <li>Gather all 4 copies of ANY card type to declare victory!</li>
              <li>Round winner earns 10 points.</li>
            </ul>
          </div>

          <!-- Reset Guest Session -->
          <div class="pt-2">
            <button 
              (click)="onResetSession()"
              class="w-full py-3 rounded-2xl border border-red-300 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs transition-colors"
            >
              Reset Player Session & Tokens
            </button>
          </div>

          <!-- Back -->
          <div class="text-center pt-2">
            <a routerLink="/" class="text-xs font-bold text-jungle-muted hover:text-jungle-dark transition-colors">
              ← Return Home
            </a>
          </div>
        </div>

      </div>
    </div>
  `,
})
export class SettingsComponent {
  public audio = inject(AudioService);
  private gameService = inject(GameService);
  private api = inject(ApiService);
  private toast = inject(ToastService);

  public apiUrl = this.api.getBaseUrl();

  public onSaveApiUrl(): void {
    if (!this.apiUrl.trim()) {
      this.toast.error('API URL cannot be empty.');
      return;
    }
    this.api.setBaseUrl(this.apiUrl.trim());
    this.toast.success('Backend server URL saved successfully!');
  }

  public onResetSession(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('star_game_token');
      sessionStorage.removeItem('star_game_player');
      localStorage.removeItem('star_game_token');
      localStorage.removeItem('star_game_player');
    }
    this.gameService.createNewGuestSession();
    this.toast.info('Session reset with new guest player ID.');
  }
}
