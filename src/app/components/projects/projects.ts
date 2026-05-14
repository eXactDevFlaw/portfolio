import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Project {
  tab: string;
  duration: string;
  about: string;
  workProcess: string;
  groupExperience: string;
  technologies: { name: string; img: string }[];
  liveUrl: string;
  githubUrl: string;
  screenshot?: string;
  ongoing?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  ts = inject(TranslationService);
  activeIndex = signal(0);

  readonly projects: Project[] = [
    {
      tab: 'Pollo Loco',
      duration: '6 weeks',
      ongoing: false,
      about: 'Pollo Loco is a browser based jump and run game built with HTML, CSS, JavaScript and an object oriented architecture. The player controls Pepe, collects coins and bottles, avoids enemies and defeats the final boss.',
      workProcess: 'I structured the project using modular JavaScript classes and a clean folder architecture. Each part of the game is separated into its own module to keep the code maintainable and scalable.',
      groupExperience: 'This project deepened my understanding of JavaScript, object oriented programming and game architecture.',
      technologies: [
        { name: 'JavaScript', img: 'img/tech-javascript.svg' },
        { name: 'HTML', img: 'img/tech-html.svg' },
        { name: 'CSS', img: 'img/tech-css.svg' },
      ],
      liveUrl: 'https://pollo-loco.lutz-boelling.de',
      githubUrl: 'https://github.com/eXactDevFlaw/el-pollo-loco',
      screenshot: 'img/project-pollo-loco.png',
    },
    {
      tab: 'Join',
      duration: '4 weeks',
      ongoing: false,
      about: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      workProcess: 'How did you organise your work on this project? What patterns or principles did you follow?',
      groupExperience: 'We worked with three people on this project. I was placed as head of the team to orginize the structure and get timelines in place.',
      technologies: [
        { name: 'JavaScript', img: 'img/tech-javascript.svg' },
        { name: 'HTML', img: 'img/tech-html.svg' },
        { name: 'CSS', img: 'img/tech-css.svg' },
      ],
      liveUrl: 'https://join.lutz-boelling.de',
      githubUrl: 'https://github.com/eXactDevFlaw/join-frontend',
      screenshot: 'img/project-join.png',
    },
    {
      tab: 'Poll-App',
      duration: 'In progress',
      ongoing: true,
      about: 'A polling application currently in development.',
      workProcess: 'Describe how you are organising your work on this project.',
      groupExperience: 'Describe your role and team setup for this project.',
      technologies: [
        { name: 'Angular', img: 'img/tech-angular.svg' },
        { name: 'TypeScript', img: 'img/tech-typescritp.svg' },
      ],
      liveUrl: 'https://poll-app.lutz-boelling.de',
      githubUrl: 'https://github.com/eXactDevFlaw/PollApp',
      screenshot: 'img/project-poll-app.png',
    },
  ];

  get active(): Project {
    return this.projects[this.activeIndex()];
  }

  select(index: number) {
    this.activeIndex.set(index);
  }
}