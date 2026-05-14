import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Reference {
  name: string;
  project: string;
  quote: string;
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
      name: 'Sahra Mueller',
      project: 'DA Bubble',
      quote: '"Lutz had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person."',
      linkedInUrl: '#',
    },
    {
      name: 'James Rugman',
      project: 'Join',
      quote: '"Lutz is a reliable and friendly person. Works in a structured way and writes a clear code. I recommend him as a colleague."',
      linkedInUrl: '#',
    },
    {
      name: 'Evelyn Marx',
      project: 'Sharkie',
      quote: '"He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code."',
      linkedInUrl: '#',
    },
  ];
}
