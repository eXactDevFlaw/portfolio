import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Reference {
  name: string;
  project: string;
  quote: { EN: string; DE: string };
  linkedInUrl: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesComponent {
  ts = inject(TranslationService);

  readonly references: Reference[] = [
    {
      name: 'Christian Klemm',
      project: 'Join - Kanbanboard',
      quote: {
        EN: '"Thanks to Lutz. He carried us through the project"',
        DE: '"Danke an Lutz. Er hat uns durch das Projekt mit durchgezogen"',
      },
      linkedInUrl: 'https://www.linkedin.com/in/christian-klemm-650071b5/',
    },
    {
      name: 'Lars Tieseler',
      project: 'Join - Kanbanboard',
      quote: {
        EN: '"Lutz guided us well through the project. He will make his way, I am sure of it!"',
        DE: '"Lutz hat uns gut durch das Projekt geführt. Er wird seinen weg gehen, da bin ich mir sicher!"',
      },
      linkedInUrl: 'https://www.linkedin.com/in/lars-tieseler-50922b261/',
    },
  ];
}
