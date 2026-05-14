import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  ts = inject(TranslationService);

  readonly skills = [
    { name: 'Angular',         img: 'img/skill-angular.svg' },
    { name: 'TypeScript',      img: 'img/skill-typescript.svg' },
    { name: 'JavaScript',      img: 'img/skill-javascript.svg' },
    { name: 'HTML',            img: 'img/skill-html.svg' },
    { name: 'CSS',             img: 'img/skill-css.svg' },
    { name: 'REST-API',        img: 'img/skill-rest-api.svg' },
    { name: 'Supabase',        img: 'img/skill-supabase.svg' },
    { name: 'Firebase',        img: 'img/skill-firebase.svg' },
    { name: 'Git',             img: 'img/skill-git.svg' },
    { name: 'Material Design', img: 'img/skill-material-design.svg' },
    { name: 'Scrum',           img: 'img/skill-scrum.svg' },
  ];

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}