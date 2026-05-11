import { Component } from '@angular/core';

/** Landing hero section displaying the profile photo, name, and scroll-down button. */
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  /** Smoothly scrolls the page down to the Why Me section. */
  scrollDown() {
    document.getElementById('why-me')?.scrollIntoView({ behavior: 'smooth' });
  }
}
