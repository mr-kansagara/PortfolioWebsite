import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-interactive-bg',
    standalone: true,
    templateUrl: './interactive-bg.component.html',
    styleUrls: ['./interactive-bg.component.scss']
})
export class InteractiveBgComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;
    private stars: Star[] = [];
    private animationFrameId: number = 0;
    private width: number = 0;
    private height: number = 0;

    ngAfterViewInit(): void {
        this.initCanvas();
        this.createStars();
        this.animate();
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animationFrameId);
    }

    private initCanvas() {
        const canvas = this.canvasRef.nativeElement;
        this.ctx = canvas.getContext('2d')!;
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas.bind(this));
    }

    private resizeCanvas() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvasRef.nativeElement.width = this.width;
        this.canvasRef.nativeElement.height = this.height;
    }

    private createStars() {
        const starCount = 200;
        for (let i = 0; i < starCount; i++) {
            this.stars.push(new Star(this.width, this.height));
        }
    }

    private animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.stars.forEach(star => {
            star.update(this.width, this.height);
            star.draw(this.ctx);
        });

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    }
}

class Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
        this.opacity = Math.random();
    }

    update(width: number, height: number) {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = height;
            this.x = Math.random() * width;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
