import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ToastService } from '../../core/services/toast.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PlayerAvatarComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-center items-center px-4 py-12">
      <div class="max-w-md w-full bg-jungle-cream/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
        
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="text-xs font-bold text-jungle-muted uppercase tracking-wider">PLAYER SETTINGS</div>
          <h2 class="text-2xl font-black text-jungle-dark mt-1">Adventurer Profile</h2>
        </div>

        <!-- Current Avatar Preview -->
        <div class="flex flex-col items-center justify-center mb-6">
          <app-player-avatar 
            [avatarUrl]="selectedAvatar" 
            [name]="playerName" 
            size="lg" 
          />

          <!-- Avatar Preset Selector -->
          <div class="mt-4 flex items-center justify-center space-x-2">
            @for (seed of avatarSeeds; track seed) {
              <button 
                type="button"
                (click)="selectSeed(seed)"
                class="w-8 h-8 rounded-full overflow-hidden border-2 transition-transform hover:scale-110"
                [ngClass]="selectedSeed === seed ? 'border-jungle-gold ring-2 ring-jungle-gold' : 'border-gray-200'"
              >
                <img [src]="getSeedUrl(seed)" class="w-full h-full object-cover" />
              </button>
            }
          </div>
        </div>

        <form (ngSubmit)="onSave()" class="space-y-5">
          <!-- Name Input -->
          <div>
            <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1.5">
              Adventurer Name
            </label>
            <input 
              type="text" 
              name="playerName"
              [(ngModel)]="playerName" 
              required
              maxlength="20"
              placeholder="Enter your name"
              class="w-full px-4 py-3 rounded-xl bg-jungle-surface/30 border border-jungle-green/30 text-jungle-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:bg-white"
            />
          </div>

          <!-- Save Button -->
          <button 
            type="submit"
            [disabled]="isSaving || !playerName.trim()"
            class="w-full py-3.5 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-jungle-cream font-black text-sm shadow-jungle transition-all disabled:opacity-50"
          >
            <span>{{ isSaving ? 'Saving...' : 'Save Profile ✓' }}</span>
          </button>

          <!-- Back to home -->
          <div class="text-center pt-2">
            <a routerLink="/" class="text-xs font-bold text-jungle-muted hover:text-jungle-dark transition-colors">
              ← Return Home
            </a>
          </div>
        </form>

      </div>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  public gameService = inject(GameService);
  private toast = inject(ToastService);

  public playerName = '';
  public selectedSeed = 'tiger';
  public selectedAvatar = '';
  public isSaving = false;

  public avatarSeeds = ['tiger', 'panther', 'monkey', 'jaguar', 'eagle', 'lotus'];

  public ngOnInit(): void {
    const player = this.gameService.currentPlayer();
    if (player) {
      this.playerName = player.playerName;
      this.selectedAvatar = player.avatarUrl;
    } else {
      this.selectedAvatar = this.getSeedUrl(this.selectedSeed);
    }
  }

  public getSeedUrl(seed: string): string {
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
  }

  public selectSeed(seed: string): void {
    this.selectedSeed = seed;
    this.selectedAvatar = this.getSeedUrl(seed);
  }

  public async onSave(): Promise<void> {
    if (!this.playerName.trim()) return;

    this.isSaving = true;
    try {
      await this.gameService.updateProfile(this.playerName.trim(), this.selectedAvatar);
    } finally {
      this.isSaving = false;
    }
  }
}
