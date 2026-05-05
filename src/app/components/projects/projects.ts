import { Component, signal } from '@angular/core';

interface Project {
  tab: string;
  duration: string;
  about: string;
  workProcess: string;
  groupExperience: string;
  technologies: { name: string; img: string }[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  activeIndex = signal(0);

  readonly projects: Project[] = [
    {
      tab: 'DA Bubble',
      duration: '3 weeks',
      about: 'This App is a Slack Clone App. It revolutionises team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organisation.',
      workProcess: 'How do you keep your code clean and maintainable? You have broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      groupExperience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
      technologies: [
        { name: 'Angular', img: 'img/skill-angular.png' },
        { name: 'TypeScript', img: 'img/skill-typescript.png' },
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      tab: 'Sharkie',
      duration: '2 weeks',
      about: 'Placeholder description for Sharkie. Describe what this project does and what problem it solves.',
      workProcess: 'How did you organise your work on this project? What patterns or principles did you follow?',
      groupExperience: 'Describe the team structure and your specific role in the Sharkie project.',
      technologies: [
        { name: 'JavaScript', img: 'img/skill-javascript.png' },
        { name: 'HTML', img: 'img/skill-html.png' },
        { name: 'CSS', img: 'img/skill-css.png' },
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      tab: 'Join',
      duration: '4 weeks',
      about: 'Placeholder description for Join. Describe what this project does and what problem it solves.',
      workProcess: 'How did you organise your work on this project? What patterns or principles did you follow?',
      groupExperience: 'Describe the team structure and your specific role in the Join project.',
      technologies: [
        { name: 'JavaScript', img: 'img/skill-javascript.png' },
        { name: 'HTML', img: 'img/skill-html.png' },
        { name: 'CSS', img: 'img/skill-css.png' },
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      tab: 'Ongoing Project',
      duration: 'In progress',
      about: 'Placeholder description for your current ongoing project.',
      workProcess: 'Describe how you are organising your work on this project.',
      groupExperience: 'Describe your role and team setup for this project.',
      technologies: [
        { name: 'Angular', img: 'img/skill-angular.png' },
        { name: 'TypeScript', img: 'img/skill-typescript.png' },
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  get active(): Project {
    return this.projects[this.activeIndex()];
  }

  select(index: number) {
    this.activeIndex.set(index);
  }
}
