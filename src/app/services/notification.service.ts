import { Injectable, signal } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'info';

export interface Notification {
  message: string;
  type: NotificationType;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications = signal<Notification[]>([]);
  private counter = 0;

  show(message: string, type: NotificationType = 'info', duration: number = 3000) {
    const id = this.counter++;
    const notification: Notification = { message, type, id };
    
    this.notifications.update(current => [...current, notification]);

    setTimeout(() => {
      this.remove(id);
    }, duration);
  }

  remove(id: number) {
    this.notifications.update(current => current.filter(n => n.id !== id));
  }
}
