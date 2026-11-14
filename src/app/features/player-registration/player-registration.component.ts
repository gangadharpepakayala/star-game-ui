import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { PhysicalCard } from '../../core/models/game.models';

@Component({
  selector: 'app-player-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, GameCardComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-center items-center px-4 py-8">
      <div class="max-w-2xl w-full bg-jungle-cream/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
        
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-jungle-surface/60 text-jungle-dark text-xs font-bold mb-2">
            <span>🌿 STEP 2 OF 2: CARD SUBMISSION</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-jungle-dark">Submit Your Unique Card</h2>
          <p class="text-xs text-jungle-muted mt-1 max-w-md mx-auto">
            Each player brings one unique card type to the jungle table. The server will generate 4 physical copies of it!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <!-- Input Form -->
          <form (ngSubmit)="onSubmit()" class="space-y-4">
            
            <!-- Player Name -->
            <div>
              <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                Your Player Name
              </label>
              <input 
                type="text" 
                name="playerName"
                [(ngModel)]="playerName" 
                required
                maxlength="20"
                class="w-full px-3.5 py-2.5 rounded-xl bg-jungle-surface/30 border border-jungle-green/30 text-jungle-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:bg-white"
              />
            </div>

            <!-- Card Name -->
            <div>
              <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                Unique Card Name
              </label>
              <input 
                type="text" 
                name="cardName"
                [(ngModel)]="cardName" 
                required
                maxlength="20"
                placeholder="e.g. DRAGON, PANTHER, LOTUS"
                class="w-full px-3.5 py-2.5 rounded-xl bg-jungle-surface/30 border border-jungle-green/30 text-jungle-dark font-black text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-jungle-green focus:bg-white"
              />
              <p class="text-[10px] text-jungle-muted mt-1">
                Must be unique among players in this room.
              </p>
            </div>

            <!-- Card Image Upload / Preset -->
            <div>
              <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                Card Artwork (Optional)
              </label>

              <!-- File Upload Input -->
              <div class="flex items-center space-x-2">
                <label class="flex-1 cursor-pointer py-2 px-3 rounded-xl border border-dashed border-jungle-green/40 hover:border-jungle-green bg-jungle-surface/20 text-center text-xs font-semibold text-jungle-muted hover:text-jungle-dark transition-all">
                  <span>📁 Upload Image (PNG/JPG)</span>
                  <input 
                    type="file" 
                    accept="image/png, image/jpeg, image/webp" 
                    (change)="onFileSelected($event)" 
                    class="hidden" 
                  />
                </label>

                @if (cardImageUrl) {
                  <button 
                    type="button" 
                    (click)="cardImageUrl = undefined" 
                    class="p-2 text-xs text-red-600 hover:bg-red-50 rounded-lg"
                    title="Remove Image"
                  >
                    ✕
                  </button>
                }
              </div>

              <!-- Quick Presets -->
              <div class="mt-2 flex items-center space-x-2">
                <span class="text-[10px] text-jungle-muted font-bold">Presets:</span>
                @for (preset of presets; track preset.name) {
                  <button 
                    type="button"
                    (click)="cardName = preset.name; cardImageUrl = preset.url"
                    class="px-2 py-0.5 rounded-lg bg-jungle-surface/40 hover:bg-jungle-surface border border-jungle-green/20 text-[10px] font-bold text-jungle-dark"
                  >
                    {{ preset.name }}
                  </button>
                }
              </div>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              [disabled]="!cardName.trim() || isSubmitting"
              class="w-full py-3 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-jungle-cream font-black text-sm shadow-jungle hover:shadow-jungle-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 flex items-center justify-center space-x-2"
            >
              <span>{{ isSubmitting ? 'Registering...' : 'Lock In Card & Ready ✓' }}</span>
            </button>
          </form>

          <!-- Live Card Preview -->
          <div class="flex flex-col items-center justify-center p-6 bg-jungle-surface/30 rounded-2xl border border-jungle-green/20">
            <div class="text-xs font-bold text-jungle-muted uppercase tracking-wider mb-3">
              LIVE CARD PREVIEW
            </div>

            <app-game-card 
              [card]="previewCard" 
              size="lg"
            />

            <div class="mt-3 text-center text-[11px] text-jungle-muted max-w-[200px]">
              4 copies of this card will be shuffled into the deck!
            </div>
          </div>

        </div>

      </div>
    </div>
  `,
})
export class PlayerRegistrationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public gameService = inject(GameService);
  private api = inject(ApiService);
  private toast = inject(ToastService);

  public playerName = '';
  public cardName = 'STAR';
  public cardImageUrl: string | undefined = undefined;
  public isSubmitting = false;
  public roomId = '';

  public presets = [
    { name: 'DRAGON', url: undefined },
    { name: 'PHOENIX', url: undefined },
    { name: 'PANTHER', url: undefined },
    { name: 'TIGER', url: undefined },
  ];

  public get previewCard(): PhysicalCard {
    return {
      id: 'preview_1',
      cardTypeId: 'preview',
      cardName: this.cardName.trim() || 'STAR',
      cardImageUrl: this.cardImageUrl,
      currentOwnerId: '',
      position: 0,
    };
  }

  public ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('roomId') || '';
    const player = this.gameService.currentPlayer();
    if (player) {
      this.playerName = player.playerName;
    }

    if (this.roomId) {
      this.gameService.connectToRoom(this.roomId);
    }
  }

  public onFileSelected(event: any): void {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      this.toast.error('Image size must be less than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 160;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          this.cardImageUrl = canvas.toDataURL('image/jpeg', 0.8);
          this.toast.success('Artwork loaded & optimized!');
        } else {
          this.cardImageUrl = reader.result as string;
          this.toast.success('Artwork loaded successfully!');
        }
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  public async onSubmit(): Promise<void> {
    if (!this.cardName.trim()) {
      this.toast.error('Card name is required.');
      return;
    }

    this.isSubmitting = true;
    try {
      const finalPlayerName = this.playerName.trim();
      if (finalPlayerName) {
        await this.gameService.updateProfile(finalPlayerName);
      }

      this.gameService.submitCard(this.cardName.trim(), this.cardImageUrl, finalPlayerName);
      this.toast.success(`Submitted "${this.cardName.trim()}" successfully!`);
      this.router.navigate(['/lobby', this.roomId]);
    } finally {
      this.isSubmitting = false;
    }
  }
}
