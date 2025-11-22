import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorService } from '../../services/cursor.service';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    @Input() project: any;
    @ViewChild('card') card!: ElementRef;

    constructor(private cursorService: CursorService) { }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const card = this.card.nativeElement;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        const card = this.card.nativeElement;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        this.cursorService.setHover(false);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.cursorService.setHover(true);
    }
}
