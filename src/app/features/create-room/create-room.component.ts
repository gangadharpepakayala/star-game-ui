import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { ToastService } from '../../core/services/toast.service';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { PhysicalCard } from '../../core/models/game.models';
import { PREDEFINED_CARD_SYMBOLS, getRandomCardSymbol, CardSymbol } from '../../core/models/card-symbols';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, GameCardComponent],
  template: `
    <div class="min-h-screen jungle-pattern flex flex-col justify-center items-center px-4 py-8">
      <div class="max-w-3xl w-full bg-jungle-cream/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-jungle-green/20 shadow-jungle">
        
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-jungle-green text-jungle-cream mx-auto flex items-center justify-center font-black text-2xl shadow-md mb-3">
            ⛺
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-jungle-dark">Create Jungle Arena</h2>
          <p class="text-xs text-jungle-muted mt-1 max-w-md mx-auto">
            Specify your player name, choose your unique card type, and configure the room.
          </p>
        </div>

        <form (ngSubmit)="onCreate()" class="space-y-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            <!-- LEFT COLUMN: Player & Card Selection -->
            <div class="space-y-4 bg-jungle-surface/20 p-5 rounded-2xl border border-jungle-green/20">
              <h3 class="text-sm font-black text-jungle-dark flex items-center space-x-1.5 border-b border-jungle-green/10 pb-2">
                <span>1. Your Explorer & Card</span>
              </h3>

              <!-- Host Player Name -->
              <div>
                <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                  Your Player Name <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="hostPlayerName"
                  [(ngModel)]="hostPlayerName" 
                  required
                  maxlength="20"
                  placeholder="e.g. JungleChief"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white border border-jungle-green/30 text-jungle-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green transition-all"
                />
              </div>

              <!-- Host Card Name -->
              <div>
                <div class="flex items-center justify-between mb-1">
                  <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide">
                    Your Unique Card Name <span class="text-red-500">*</span>
                  </label>
                  <button 
                    type="button" 
                    (click)="pickRandomSymbol()"
                    class="text-[11px] font-bold text-jungle-green hover:underline cursor-pointer"
                  >
                    🎲 Random
                  </button>
                </div>
                <input 
                  type="text" 
                  name="cardName"
                  [(ngModel)]="cardName" 
                  required
                  maxlength="20"
                  placeholder="e.g. TIGER, FALCON, DRAGON"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white border border-jungle-green/30 text-jungle-dark font-black text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-jungle-green transition-all"
                />
                <p class="text-[10px] text-jungle-muted mt-1">
                  4 physical copies of this card will be generated for the deck!
                </p>
              </div>

              <!-- Quick Presets from 100+ Predefined Symbols -->
              <div>
                <span class="text-[10px] text-jungle-muted font-bold block mb-1.5">Predefined Card Symbols (100+ available):</span>
                <div class="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-1 bg-white/70 rounded-xl border border-jungle-green/15">
                  @for (sym of popularSymbols; track sym.name) {
                    <button 
                      type="button"
                      (click)="selectPreset(sym.name)"
                      class="px-2 py-0.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center space-x-1"
                      [ngClass]="cardName.toUpperCase() === sym.name 
                        ? 'bg-jungle-green text-white border-jungle-green shadow-xs' 
                        : 'bg-white hover:bg-jungle-surface/60 border-jungle-green/20 text-jungle-dark'"
                    >
                      <span>{{ sym.emoji }}</span>
                      <span>{{ sym.name }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- Optional Card Image -->
              <div>
                <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                  Custom Artwork (Optional)
                </label>
                <div class="flex items-center space-x-2">
                  <label class="flex-1 cursor-pointer py-2 px-3 rounded-xl border border-dashed border-jungle-green/40 hover:border-jungle-green bg-white text-center text-xs font-semibold text-jungle-muted hover:text-jungle-dark transition-all">
                    <span>📁 Upload Image</span>
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
                      class="p-2 text-xs text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                      title="Remove Image"
                    >
                      ✕
                    </button>
                  }
                </div>
              </div>

            </div>

            <!-- RIGHT COLUMN: Room Configuration & Preview -->
            <div class="space-y-4 bg-jungle-surface/20 p-5 rounded-2xl border border-jungle-green/20">
              <h3 class="text-sm font-black text-jungle-dark flex items-center space-x-1.5 border-b border-jungle-green/10 pb-2">
                <span>2. Arena Settings & Preview</span>
              </h3>

              <!-- Arena Name -->
              <div>
                <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                  Arena Room Name
                </label>
                <input 
                  type="text" 
                  name="roomName"
                  [(ngModel)]="roomName" 
                  required
                  maxlength="30"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white border border-jungle-green/30 text-jungle-dark font-medium text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green transition-all"
                />
              </div>

              <!-- Max Players & Total Rounds -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                    Max Players
                  </label>
                  <select 
                    name="maxPlayers"
                    [(ngModel)]="maxPlayers"
                    class="w-full px-3 py-2.5 rounded-xl bg-white border border-jungle-green/30 text-jungle-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green"
                  >
                    @for (num of playerOptions; track num) {
                      <option [value]="num">{{ num }} Players</option>
                    }
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-jungle-dark uppercase tracking-wide mb-1">
                    Rounds
                  </label>
                  <select 
                    name="totalRounds"
                    [(ngModel)]="totalRounds"
                    class="w-full px-3 py-2.5 rounded-xl bg-white border border-jungle-green/30 text-jungle-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green"
                  >
                    @for (r of roundOptions; track r) {
                      <option [value]="r">{{ r }} Rounds</option>
                    }
                  </select>
                </div>
              </div>

              <!-- Live Card Preview -->
              <div class="flex flex-col items-center justify-center p-3 bg-white/60 rounded-xl border border-jungle-green/10">
                <span class="text-[10px] font-bold text-jungle-muted uppercase tracking-wider mb-2">Live Card Preview</span>
                <app-game-card [card]="getPreviewCard()" size="sm" />
              </div>

              <!-- Visibility / Password -->
              <div class="pt-1">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="isPrivate"
                    [(ngModel)]="isPrivate"
                    class="rounded text-jungle-green focus:ring-jungle-green h-4 w-4" 
                  />
                  <span class="text-xs font-bold text-jungle-dark">Require Password (Private Room)</span>
                </label>
              </div>

              @if (isPrivate) {
                <div>
                  <input 
                    type="password" 
                    name="password"
                    [(ngModel)]="password" 
                    placeholder="Enter private passcode"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-white border border-jungle-green/30 text-jungle-dark font-medium text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green transition-all"
                  />
                </div>
              }

            </div>

          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            [disabled]="isSubmitting || !roomName.trim() || !cardName.trim() || !hostPlayerName.trim()"
            class="w-full py-4 rounded-2xl bg-jungle-green hover:bg-jungle-dark text-jungle-cream font-black text-base shadow-jungle hover:shadow-jungle-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{{ isSubmitting ? 'Creating Arena & Registering Card...' : 'Create Room & Enter Lobby →' }}</span>
          </button>

          <!-- Back to home -->
          <div class="text-center">
            <a routerLink="/" class="text-xs font-bold text-jungle-muted hover:text-jungle-dark transition-colors">
              ← Cancel & Return Home
            </a>
          </div>
        </form>

      </div>
    </div>
  `,
})
export class CreateRoomComponent implements OnInit {
  private gameService = inject(GameService);
  private toast = inject(ToastService);

  public hostPlayerName = this.gameService.currentPlayer()?.playerName || 'JungleChief';
  public cardName = 'TIGER';
  public cardImageUrl: string | undefined = undefined;

  public roomName = 'Jungle Arena';
  public maxPlayers = 4;
  public totalRounds = 5;
  public playerOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  public roundOptions = [1, 3, 5, 10, 15, 20];
  public isPrivate = false;
  public password = '';
  public isSubmitting = false;

  public popularSymbols: CardSymbol[] = PREDEFINED_CARD_SYMBOLS.slice(0, 30);

  public ngOnInit(): void {
    this.pickRandomSymbol();
  }

  public pickRandomSymbol(): void {
    const sym = getRandomCardSymbol([this.cardName]);
    this.cardName = sym.name;
  }

  public selectPreset(name: string): void {
    this.cardName = name;
  }

  public getPreviewCard(): PhysicalCard {
    return {
      id: 'preview_1',
      cardTypeId: 'crd_preview',
      cardName: this.cardName.trim() || 'TIGER',
      cardImageUrl: this.cardImageUrl,
      currentOwnerId: 'preview_player',
      position: 0,
    };
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    if (file.size > 5 * 1024 * 1024) {
      this.toast.error('Image size must be under 5MB.');
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

  public async onCreate(): Promise<void> {
    if (!this.hostPlayerName.trim()) {
      this.toast.error('Please enter your player name.');
      return;
    }

    if (!this.cardName.trim()) {
      this.toast.error('Please specify your unique card name.');
      return;
    }

    if (!this.roomName.trim()) {
      this.toast.error('Please enter an arena name.');
      return;
    }

    if (this.isPrivate && !this.password.trim()) {
      this.toast.error('Please enter a password for private room.');
      return;
    }

    this.isSubmitting = true;
    try {
      await this.gameService.createRoom({
        roomName: this.roomName.trim(),
        maxPlayers: Number(this.maxPlayers),
        totalRounds: Number(this.totalRounds),
        roomVisibility: this.isPrivate ? 'PRIVATE' : 'PUBLIC',
        password: this.isPrivate ? this.password.trim() : undefined,
        playerName: this.hostPlayerName.trim(),
        cardName: this.cardName.trim().toUpperCase(),
        cardImageUrl: this.cardImageUrl,
      });
    } finally {
      this.isSubmitting = false;
    }
  }
}
