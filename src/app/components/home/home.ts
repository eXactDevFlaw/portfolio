import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { WhyMeComponent } from '../why-me/why-me';
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { ReferencesComponent } from '../references/references';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, WhyMeComponent, SkillsComponent, ProjectsComponent, ReferencesComponent, ContactComponent, FooterComponent],
  template: `
    <app-hero></app-hero>
    <app-navbar></app-navbar>
    <app-why-me></app-why-me>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-references></app-references>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class HomeComponent {}
