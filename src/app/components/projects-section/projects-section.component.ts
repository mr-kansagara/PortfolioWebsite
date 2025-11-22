import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
    selector: 'app-projects-section',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent],
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
    projects = [
        {
            title: 'Neon Dashboard',
            description: 'A futuristic analytics dashboard with real-time data visualization.',
            tags: ['Angular', 'D3.js', 'WebSockets']
        },
        {
            title: 'Cyber Commerce',
            description: 'Next-gen e-commerce platform with 3D product previews.',
            tags: ['React', 'Three.js', 'Stripe']
        },
        {
            title: 'AI Nexus',
            description: 'Generative AI interface for creative professionals.',
            tags: ['Vue', 'OpenAI API', 'WebGL']
        },
        {
            title: 'Hologram Chat',
            description: 'Immersive 3D chat application with spatial audio.',
            tags: ['WebRTC', 'Babylon.js', 'Node.js']
        }
    ];
}
