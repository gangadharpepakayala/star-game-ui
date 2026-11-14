import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block select-none">
      <!-- Glow ring if active turn -->
      @if (isTurn) {
        <div class="absolute -inset-1 rounded-full bg-jungle-gold/80 animate-ping opacity-40"></div>
        <div class="absolute -inset-1 rounded-full ring-2 ring-jungle-gold shadow-gold-glow animate-pulse"></div>
      }

      <!-- Avatar container -->
      <div 
        class="relative rounded-full overflow-hidden border-2 transition-transform duration-200"
        [ngClass]="{
          'border-jungle-gold ring-2 ring-jungle-gold scale-105': isTurn,
          'border-jungle-green': !isTurn && isReady,
          'border-jungle-surface opacity-80': !isReady,
          'w-10 h-10': size === 'sm',
          'w-14 h-14': size === 'md',
          'w-20 h-20': size === 'lg'
        }"
      >
        <img 
          [src]="avatarUrl || defaultAvatar" 
          [alt]="name" 
          class="w-full h-full object-cover bg-jungle-surface"
          (error)="onImgError($event)"
        />
      </div>

      <!-- Host Star Badge -->
      @if (isHost) {
        <div 
          class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-jungle-gold text-jungle-dark flex items-center justify-center text-[10px] shadow-sm font-black border border-white"
          title="Room Host"
        >
          ★
        </div>
      }

      <!-- Ready Checkmark Badge (in lobby) -->
      @if (showReadyBadge) {
        <div 
          class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] shadow-sm font-bold border border-white"
          [ngClass]="isReady ? 'bg-jungle-green text-white' : 'bg-gray-400 text-white'"
          [title]="isReady ? 'Ready' : 'Waiting'"
        >
          {{ isReady ? '✓' : '…' }}
        </div>
      }

      <!-- Connection Status indicator -->
      @if (!isConnected) {
        <div 
          class="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white"
          title="Disconnected"
        ></div>
      }
    </div>
  `,
})
export class PlayerAvatarComponent {
  @Input() avatarUrl?: string;
  @Input() name = 'Adventurer';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() isHost = false;
  @Input() isReady = false;
  @Input() isTurn = false;
  @Input() isConnected = true;
  @Input() showReadyBadge = false;

  public defaultAvatar = 'https://api.dicebear.com/7.x/bottts/svg?seed=explorer';

  public onImgError(event: any): void {
    event.target.src = this.defaultAvatar;
  }
}
