import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center p-6 space-y-3">
      <div class="relative w-12 h-12">
        <div class="absolute inset-0 rounded-full border-4 border-jungle-surface animate-ping opacity-25"></div>
        <div class="w-12 h-12 rounded-full border-4 border-t-jungle-green border-r-jungle-gold border-b-jungle-dark border-l-transparent animate-spin"></div>
        <div class="absolute inset-0 flex items-center justify-center text-xs">🌿</div>
      </div>
      @if (message) {
        <p class="text-sm font-medium text-jungle-muted animate-pulse">{{ message }}</p>
      }
    </div>
  `,
})
export class LoadingIndicatorComponent {
  @Input() message = 'Loading jungle adventures...';
}
