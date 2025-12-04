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
      period: 'April 2025 – Present',
      description:
        'Developing and maintaining scalable web applications using .NET Core, MVC, Razor Pages, and SQL Server. Built and integrated data-driven Telerik Reports for business analytics. Designed RESTful APIs for smooth communication between systems. Worked with cross-functional teams to ship new features and improve existing modules. Implemented CI/CD pipelines through Azure DevOps, ensuring automated, reliable deployments. Focused on application security, performance tuning, clean architecture, and adherence to coding standards.',
      technologies: [
        '.NET Core',
        'MVC',
        'Razor Pages',
        'SQL Server',
        'Telerik Reports',
        'RESTful APIs',
        'Azure DevOps',
        'Git'
      ]
    },
    {
      role: 'Junior Software Developer',
      company: 'Anamya Tech LLP',
      period: 'January 2024 – April 2025',
      description:
        'Built responsive and modern web applications using Angular and .NET MVC. Improved application performance by optimizing SQL queries and database workflows. Implemented JWT-based authentication to strengthen system security. Delivered user-focused features including OTP login, Forgot Password, and Email/SMS notifications. Collaborated with teams using Git and GitLab for streamlined version control and development processes.',
      technologies: [
        'Angular',
        '.NET MVC',
        'SQL Server',
        'JWT Authentication',
        'Git',
        'GitLab'
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'ZETRIXWEB INFOTECH LLP',
      period: 'March 2022 – Dec 2023',
      description:
        'Assisted in developing web applications using .NET MVC and JavaScript. Worked on UI improvements, bug fixing, and creating reusable components. Supported senior developers in API integration and database operations. Gained hands-on experience with version control, responsive design, and writing clean, maintainable code for production environments.',
      technologies: [
        '.NET MVC',
        'JavaScript',
        'jQuery',
        'HTML',
        'CSS',
        'SQL Server',
        'Git'
      ]
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
