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
            title: 'Elemental - Real Estate Intelligence Platform',
            description:
                'Engineered advanced reporting modules using Telerik Reports, optimized SQL data pipelines, and implemented CI/CD automation for seamless deployments in a large-scale real estate analytics system.',
            tags: ['.NET Core', 'Telerik Reports', 'SQL Server', 'CI/CD']
        },
        {
            title: 'EHA Soft – Document Security & Compliance Suite',
            description:
                'Developed secure backend modules with RBAC, integrated analytical reports, and strengthened data compliance through controlled access workflows and audit-driven reporting.',
            tags: ['.NET Core', 'Telerik Reports', 'Security']
        },
        {
            title: 'LMS Pro – Next-Gen Learning Management System',
            description:
                'Built a scalable Angular 19 architecture, integrated REST APIs for real-time learning interactions, and improved UI/UX for smooth, accessible multi-device learning experiences.',
            tags: ['Angular', 'RESTful APIs', 'TypeScript', 'UX/UI']
        },

        // 🔥 Refined + Attractive New Project Names
        {
            title: 'ProStock – Smart Inventory & Billing Dashboard',
            description:
                'Created an intelligent inventory system with automated invoicing, live stock tracking, and secure authentication flows. Optimized SQL operations for high-performance data management.',
            tags: ['.NET MVC', 'SQL Server', 'Entity Framework', 'JWT']
        },
        {
            title: 'SupportFlow – Customer Ticketing & Automation Portal',
            description:
                'Designed a streamlined ticketing platform with role-based dashboards, SLA tracking, status workflows, and automated email/SMS alerts for improved customer support operations.',
            tags: ['.NET Core', 'REST API', 'Razor Pages', 'Notifications']
        },
        {
            title: 'InsightHub – Business Analytics & Reporting Portal',
            description:
                'Developed a centralized analytics portal with interactive dashboards, advanced filtering, and automated report generation. Implemented role-based access, integrated complex SQL datasets, and delivered high-performance reports using Telerik for real-time business insights.',
            tags: ['.NET Core', 'Telerik Reports', 'SQL Server', 'Data Analytics']
        }
    ];


}

