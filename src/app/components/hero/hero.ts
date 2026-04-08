import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  scrollDown() {
    document.getElementById('why-me')?.scrollIntoView({ behavior: 'smooth' });
  }
}