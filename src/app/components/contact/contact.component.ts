import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    sendEmail(name: string, senderEmail: string, message: string) {
        const email = "mr.kansagara@gmail.com";
        const subject = `Portfolio Contact: ${name}`;
        const body = `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

        // Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Outlook Web compose URL
        const outlookWebUrl = `https://outlook.office.com/mail/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Step 1: Try Gmail (if user is logged in Gmail, it opens directly)
        fetch("https://mail.google.com", { mode: "no-cors" })
            .then(() => {
                // Gmail reachable → open gmail
                window.open(gmailUrl, "_blank");
            })
            .catch(() => {
                // Gmail not reachable → try Outlook Web
                fetch("https://outlook.office.com", { mode: "no-cors" })
                    .then(() => {
                        window.open(outlookWebUrl, "_blank");
                    })
                    .catch(() => {
                        // Fallback → default email client
                        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    });
            });
    }
}
