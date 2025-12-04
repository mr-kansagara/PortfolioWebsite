import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;

  services = [
    {
      title: 'Custom Web Development',
      icon: 'code',
      description: 'Building robust, scalable, and high-performance web applications tailored to your business needs using .NET Core and Angular.',
      features: ['Single Page Applications (SPA)', 'Enterprise Web Solutions', 'Progressive Web Apps (PWA)']
    },
    {
      title: 'Cloud & DevOps Solutions',
      icon: 'cloud',
      description: 'Architecting secure cloud infrastructures on Azure/AWS and implementing CI/CD pipelines for automated and reliable deployments.',
      features: ['Azure & AWS Architecture', 'CI/CD Automation', 'Docker & Kubernetes']
    },
    {
      title: 'API Integration & Backend',
      icon: 'api',
      description: 'Designing RESTful APIs and Microservices to seamlessly integrate disparate systems and automate complex business workflows.',
      features: ['RESTful API Design', 'Microservices Architecture', 'Third-party Integrations']
    },
    {
      title: 'Database Optimization',
      icon: 'database',
      description: 'Designing efficient database schemas and optimizing SQL queries to ensure your applications run fast and handle data securely.',
      features: ['SQL Server Optimization', 'Data Migration', 'Secure Data Storage']
    }
  ];

  ngAfterViewInit() {
    gsap.from(this.serviceCards.map(card => card.nativeElement), {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }
}
