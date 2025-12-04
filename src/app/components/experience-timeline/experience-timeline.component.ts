import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.scss']
})
export class ExperienceTimelineComponent implements AfterViewInit {
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  experiences = [
    {
      role: 'Software Developer',
      company: 'Xelentor Technologies Pvt. Ltd.',
      period: 'Jan 2023 – Present',
      description: 'Designed, developed, and maintained scalable web applications using .NET Core, MVC, Razor Pages, and SQL Server. Created and integrated Telerik Reports to deliver interactive and data-driven business reports. Developed RESTful APIs for communication between frontend and backend services. Collaborated with cross-functional teams to define, design, and ship new features. Implemented CI/CD pipelines in Azure DevOps for automated deployment and version control. Ensured application security, performance optimization, and adherence to coding standards.',
      technologies: ['.NET Core', 'SQL Server', 'Azure DevOps', 'Telerik Reports', 'RESTful APIs']
    },
    {
      role: 'Junior Software Developer',
      company: 'Anamya Tech LLP',
      period: 'Dec 2021 – Jan 2023',
      description: 'Developed responsive web applications using Angular and .NET MVC. Optimized SQL queries to improve response times and enhance performance. Implemented JWT-based authentication for secure user access. Built features like OTP login, Forgot Password, and Email/SMS notifications to enhance user engagement. Used Git, GitLab for version control and collaborative development.',
      technologies: ['Angular', '.NET MVC', 'SQL', 'Git', 'JWT']
    }
  ];

  ngAfterViewInit() {
    this.timelineItems.forEach((item, index) => {
      gsap.from(item.nativeElement, {
        scrollTrigger: {
          trigger: item.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }
}
