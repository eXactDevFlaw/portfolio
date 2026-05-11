import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Sticky navigation bar with smooth-scroll links, language toggle, and mobile overlay menu. */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  /** Currently active language. */
  lang = signal<'DE' | 'EN'>('EN');

  /** Whether the mobile overlay menu is open. */
  mobileOpen = signal(false);

  /** Section labels used to generate nav links and derive scroll target IDs. */
  navLinks = ['Why me', 'Skills', 'Projects', 'Contact'];

  /** Sets the active language. */
  setLang(l: 'DE' | 'EN') {
    this.lang.set(l);
  }

  /** Toggles the mobile menu open/closed. */
  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  /** Closes the mobile menu. */
  closeMobile() {
    this.mobileOpen.set(false);
  }

  /**
   * Smoothly scrolls to the section matching the given label.
   * Converts the label to a kebab-case ID (e.g. "Why me" → "why-me").
   */
  scrollTo(section: string) {
    const id = section.toLowerCase().replace(' ', '-');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobile();
  }
}
