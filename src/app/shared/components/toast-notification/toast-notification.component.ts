import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-5 right-5 z-50 flex flex-col space-y-3 pointer-events-none max-w-sm w-full">
      @for (toast of toastService.toasts(); track toast.id) {
        <div 
          class="pointer-events-auto transform transition-all duration-300 ease-out translate-y-0 opacity-100 flex items-start p-4 rounded-xl shadow-lg border backdrop-blur-md"
          [ngClass]="{
            'bg-jungle-cream/95 text-jungle-dark border-jungle-green/40 shadow-jungle': toast.type === 'success',
            'bg-red-50/95 text-red-900 border-red-300 shadow-md': toast.type === 'error',
            'bg-amber-50/95 text-amber-900 border-amber-300 shadow-md': toast.type === 'warning',
            'bg-jungle-surface/95 text-jungle-dark border-jungle-green/30 shadow-md': toast.type === 'info'
          }"
        >
          <div class="mr-3 flex-shrink-0 mt-0.5">
            @if (toast.type === 'success') {
              <div class="w-6 h-6 rounded-full bg-jungle-green text-white flex items-center justify-center font-bold text-xs">✓</div>
            } @else if (toast.type === 'error') {
              <div class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">✕</div>
            } @else if (toast.type === 'warning') {
              <div class="w-6 h-6 rounded-full bg-jungle-gold text-white flex items-center justify-center font-bold text-xs">!</div>
            } @else {
              <div class="w-6 h-6 rounded-full bg-jungle-green/70 text-white flex items-center justify-center font-bold text-xs">ℹ</div>
            }
          </div>
          <div class="flex-1 text-sm">
            @if (toast.title) {
              <div class="font-bold text-sm tracking-wide mb-0.5">{{ toast.title }}</div>
            }
            <div class="text-xs opacity-90 leading-relaxed">{{ toast.message }}</div>
          </div>
          <button 
            (click)="toastService.dismiss(toast.id)" 
            class="ml-3 text-xs opacity-60 hover:opacity-100 text-current p-1 transition-opacity"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      }
    </div>
  `,
})
export class ToastNotificationComponent {
  public toastService = inject(ToastService);
}
