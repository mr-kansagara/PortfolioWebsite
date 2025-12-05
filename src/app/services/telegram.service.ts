import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TelegramService {

    constructor(private http: HttpClient) { }

    sendMessage(name: string, email: string, message: string) {
        const text = `
        New Message From Portfolio Website:
        Name: ${name}
        Email: ${email}
        Message: ${message}`;
        const url = `https://api.telegram.org/sendMessage`;
        return this.http.post(url, {
            text: text
        });
    }
}
