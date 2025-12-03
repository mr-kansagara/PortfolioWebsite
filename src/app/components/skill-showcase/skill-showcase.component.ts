import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-skill-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-showcase.component.html',
  styleUrls: ['./skill-showcase.component.scss']
})
export class SkillShowcaseComponent implements AfterViewInit {
  @ViewChildren('skillItem') skillItems!: QueryList<ElementRef>;

  skills = [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: '.NET MVC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Azure DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg' }, // Using networkx as a placeholder for Microservices/Architecture
  ];

  ngAfterViewInit() {
    // Initial fade in
    gsap.from(this.skillItems.map(item => item.nativeElement), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out',
      delay: 0.2
    });
  }

  onMouseMove(event: MouseEvent, item: HTMLElement) {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 3D Tilt Effect
    const rotateX = ((y - centerY) / centerY) * -20; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 20;

    gsap.to(item, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });

    // Update CSS variables for glow effect
    item.style.setProperty('--mouse-x', `${x}px`);
    item.style.setProperty('--mouse-y', `${y}px`);
  }

  onMouseLeave(item: HTMLElement) {
    gsap.to(item, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  }
}
