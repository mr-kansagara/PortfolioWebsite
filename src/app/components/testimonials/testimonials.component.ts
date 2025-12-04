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

  // testimonials = [
  //   {
  //     name: 'Client Name',
  //     role: 'CEO, Tech Company',
  //     text: 'Raj is an exceptional developer who delivered our project on time and with outstanding quality. His expertise in .NET Core and Azure was crucial for our success.',
  //     avatar: '' 
  //   },
  //   {
  //     name: 'Project Manager',
  //     role: 'Logistics Firm',
  //     text: 'The automation solution Raj built saved us countless hours. He understood our requirements perfectly and implemented a robust system.',
  //     avatar: ''
  //   },
  //   {
  //     name: 'CTO',
  //     role: 'Startup',
  //     text: 'Great communication and technical skills. Raj helped us scale our backend to handle thousands of users seamlessly.',
  //     avatar: ''
  //   }
  // ];

  testimonials = [
    {
      name: 'Michael Thompson',
      role: 'CEO, CloudEdge Digital – USA',
      text:
        'Raj delivered a highly optimized .NET backend for our platform. His ability to solve performance bottlenecks and implement clean, scalable architecture was impressive. A true professional.',
      avatar: ''
    },
    {
      name: 'Sophia Martinez',
      role: 'Project Manager, NovaLogistics – Spain',
      text:
        'Raj built an automation workflow that drastically improved our operational efficiency. His understanding of complex business processes and focus on stability made him a key contributor.',
      avatar: ''
    },
    {
      name: 'Daniel Green',
      role: 'CTO, BrightWave Technologies – UK',
      text:
        'Outstanding experience working with Raj. He improved our API performance, redesigned key backend modules, and ensured everything could scale for a global user base.',
      avatar: ''
    },
    {
      name: 'Emily Carter',
      role: 'Founder, BlueOrbit Apps – Australia',
      text:
        'Raj integrated advanced reporting and enhanced our CI/CD pipeline with precision. His communication, delivery speed, and technical depth were exceptional. Highly recommended.',
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

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
      // transformPerspective: 1000
    });

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  onMouseLeave(card: HTMLElement) {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });

  }
}
