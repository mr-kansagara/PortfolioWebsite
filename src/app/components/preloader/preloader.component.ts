import { Component, effect, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';
import gsap from 'gsap';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
  @ViewChild('preloaderContainer') container!: ElementRef;
  @ViewChild('logoGroup') logoGroup!: ElementRef;
  
  isVisible = true;

  constructor(private loadingService: LoadingService) {
    effect(() => {
      if (!this.loadingService.isLoading()) {
        this.animateExit();
      }
    });
  }

  animateExit() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.isVisible = false;
      }
    });

    // Big glow and scale towards user
    tl.to(this.logoGroup.nativeElement, {
      scale: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      filter: 'blur(20px)'
    })
    .to(this.container.nativeElement, {
      opacity: 0,
      duration: 0.5,
    }, '-=1.0');
  }
}
