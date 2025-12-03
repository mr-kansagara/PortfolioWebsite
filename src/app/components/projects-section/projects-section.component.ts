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
            title: 'Mass Elemental (Real Estate)',
            description: 'Designed reporting modules using Telerik Reports, optimized SQL queries for data aggregation, and configured CI/CD pipelines for automated deployment.',
            tags: ['.NET Core', 'Telerik Reports', 'SQL Server', 'CI/CD']
        },
        {
            title: 'EHA Soft (Document Management)',
            description: 'Developed backend modules for role-based access control, visualized user data with Telerik reports, and enhanced data security and compliance.',
            tags: ['.NET Core', 'RBAC', 'Telerik Reports', 'Security']
        },
        {
            title: 'LMS (Learning Management System)',
            description: 'Built a responsive application structure using Angular 19, integrated RESTful APIs for real-time communication, and enhanced UX/UI for accessibility.',
            tags: ['Angular', 'RESTful APIs', 'UX/UI', 'TypeScript']
        }
    ];
}
