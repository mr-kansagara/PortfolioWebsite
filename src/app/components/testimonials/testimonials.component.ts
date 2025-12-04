import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChildren('testimonialCard') testimonialCards!: QueryList<ElementRef>;

  testimonials = [
    {
      name: 'Client Name',
      role: 'CEO, Tech Company',
      text: 'Raj is an exceptional developer who delivered our project on time and with outstanding quality. His expertise in .NET Core and Azure was crucial for our success.',
      avatar: '' 
    },
    {
      name: 'Project Manager',
      role: 'Logistics Firm',
      text: 'The automation solution Raj built saved us countless hours. He understood our requirements perfectly and implemented a robust system.',
      avatar: ''
    },
    {
      name: 'CTO',
      role: 'Startup',
      text: 'Great communication and technical skills. Raj helped us scale our backend to handle thousands of users seamlessly.',
      avatar: ''
    }
  ];

  ngAfterViewInit() {
    gsap.from(this.testimonialCards.map(card => card.nativeElement), {
      scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }
}
