import { Component } from '@angular/core';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  readonly skills: Skill[] = [
    { name: 'Angular',         img: 'img/skill-angular.png' },
    { name: 'TypeScript',      img: 'img/skill-typescript.png' },
    { name: 'JavaScript',      img: 'img/skill-javascript.png' },
    { name: 'HTML',            img: 'img/skill-html.png' },
    { name: 'CSS',             img: 'img/skill-css.png' },
    { name: 'REST-API',        img: 'img/skill-rest-api.png' },
    { name: 'Supabase',        img: 'img/skill-supabase.png' },
    { name: 'Git',             img: 'img/skill-git.png' },
    { name: 'Material Design', img: 'img/skill-material-design.png' },
    { name: 'Scrum',           img: 'img/skill-scrum.png' },
  ];

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
