import { Injectable, signal } from '@angular/core';
import { ToastMessage } from '../models/game.models';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public toasts = signal<ToastMessage[]>([]);

  public show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', title?: string, duration = 3500): void {
    // All toast snackbar notifications completely disabled per user preference
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
