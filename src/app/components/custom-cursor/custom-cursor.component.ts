import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, OnDestroy, effect, NgZone } from '@angular/core';
import { CursorService } from '../../services/cursor.service';
import gsap from 'gsap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-custom-cursor',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './custom-cursor.component.html',
    styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('cursor') cursor!: ElementRef;
    @ViewChild('follower') follower!: ElementRef;

    private mouseMoveListener: any;

    constructor(public cursorService: CursorService, private ngZone: NgZone) {
        effect(() => {
            if (this.cursorService.hoverState()) {
                this.onHover();
            } else {
                this.onLeave();
            }
        });
    }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.mouseMoveListener = (event: MouseEvent) => {
                const { clientX, clientY } = event;

                gsap.to(this.cursor.nativeElement, {
                    x: clientX,
                    y: clientY,
                    duration: 0.1,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });

                gsap.to(this.follower.nativeElement, {
                    x: clientX,
                    y: clientY,
                    duration: 0.3,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
            };

            window.addEventListener('mousemove', this.mouseMoveListener);
        });
    }

    ngOnDestroy(): void {
        if (this.mouseMoveListener) {
            window.removeEventListener('mousemove', this.mouseMoveListener);
        }
    }

    onHover() {
        gsap.to(this.cursor.nativeElement, {
            scale: 0.5,
            duration: 0.3,
            overwrite: 'auto'
        });
        gsap.to(this.follower.nativeElement, {
            scale: 2,
            backgroundColor: 'rgba(0, 243, 255, 0.2)',
            borderColor: 'transparent',
            duration: 0.3,
            overwrite: 'auto'
        });
    }

    onLeave() {
        gsap.to(this.cursor.nativeElement, {
            scale: 1,
            duration: 0.3,
            overwrite: 'auto'
        });
        gsap.to(this.follower.nativeElement, {
            scale: 1,
            backgroundColor: 'transparent',
            borderColor: '#bd00ff',
            duration: 0.3,
            overwrite: 'auto'
        });
    }
}
