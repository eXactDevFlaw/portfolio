import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  lang = signal<'DE' | 'EN'>('EN');
  mobileOpen = signal(false);

  navLinks = ['Why me', 'Skills', 'Projects', 'Contact'];

  setLang(l: 'DE' | 'EN') {
    this.lang.set(l);
  }
  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }
  closeMobile() {
    this.mobileOpen.set(false);
  }

  scrollTo(section: string) {
    const id = section.toLowerCase().replace(' ', '-');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobile();
  }
}
