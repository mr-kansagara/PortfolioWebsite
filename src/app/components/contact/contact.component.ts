import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    name: string = '';
    email: string = '';
    message: string = '';

    constructor(
        private telegramService: TelegramService,
        private notificationService: NotificationService
    ) { }

    sendMessage() {
        if (!this.name || !this.email || !this.message) {
            this.notificationService.show('Please fill in all fields.', 'error');
            return;
        }

        this.telegramService.sendMessage(this.name, this.email, this.message).subscribe({
            next: (response: any) => {
                this.notificationService.show('Message sent successfully!', 'success');
                this.clearForm();
            },
            error: (error: any) => {
                console.error('Error sending message:', error);
                this.notificationService.show('Failed to send message. Please try again.', 'error');
            }
        });
    }

    clearForm() {
        this.name = '';
        this.email = '';
        this.message = '';
    }
}
