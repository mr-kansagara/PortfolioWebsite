import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isScrolled = signal<boolean>(false);
    isMenuOpen = signal<boolean>(false);

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled.set(window.scrollY > 50);
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }
}
