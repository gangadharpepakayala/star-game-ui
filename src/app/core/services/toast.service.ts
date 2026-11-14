import { Injectable, signal } from '@angular/core';
import { ToastMessage } from '../models/game.models';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public toasts = signal<ToastMessage[]>([]);

  public show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', title?: string, duration = 3500): void {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastMessage = { id, message, type, title, duration };

    this.toasts.update(current => [...current, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }
  }

  public success(message: string, title?: string): void {
    this.show(message, 'success', title);
  }

  public error(message: string, title?: string): void {
    this.show(message, 'error', title);
  }

  public info(message: string, title?: string): void {
    this.show(message, 'info', title);
  }

  public warning(message: string, title?: string): void {
    this.show(message, 'warning', title);
  }

  public dismiss(id: string): void {
    this.toasts.update(current => current.filter(t => t.id !== id));
  }
}
