import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSceneComponent } from './components/hero-scene/hero-scene.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { InteractiveBgComponent } from './components/interactive-bg/interactive-bg.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SkillShowcaseComponent } from './components/skill-showcase/skill-showcase.component';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSceneComponent, CustomCursorComponent, InteractiveBgComponent, ProjectsSectionComponent, HeaderComponent, AboutComponent, ContactComponent, SkillShowcaseComponent, ExperienceTimelineComponent, TestimonialsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortfolioWebsite');
}
