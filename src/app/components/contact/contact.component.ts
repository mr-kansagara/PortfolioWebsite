import { Component } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

    constructor(
        private telegramService: TelegramService,
        private notificationService: NotificationService
    ) {}

    sendMessage(name: string, email: string, message: string) {
        if (!name || !email || !message) {
            this.notificationService.show('Please fill in all fields.', 'error');
            return;
        }

        this.telegramService.sendMessage(name, email, message).subscribe({
            next: (response) => {
                this.notificationService.show('Message sent successfully!', 'success');
                // Optional: Clear form fields here if needed, but since we are using template refs passed by value, 
                // we can't easily clear them without accessing the DOM or using Forms.
                // For now, we'll just show the success message.
            },
            error: (error) => {
                console.error('Error sending message:', error);
                this.notificationService.show('Failed to send message. Please try again.', 'error');
            }
        });
    }
}
