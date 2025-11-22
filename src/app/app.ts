import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSceneComponent } from './components/hero-scene/hero-scene.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { InteractiveBgComponent } from './components/interactive-bg/interactive-bg.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSceneComponent, CustomCursorComponent, InteractiveBgComponent, ProjectsSectionComponent, HeaderComponent, AboutComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortfolioWebsite');
}
