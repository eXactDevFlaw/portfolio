import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  ts = inject(TranslationService);

  scrollDown() {
    document.getElementById('why-me')?.scrollIntoView({ behavior: 'smooth' });
  }
}