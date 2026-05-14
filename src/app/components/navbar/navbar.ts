import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  ts = inject(TranslationService);

  mobileOpen = false;

  get navLinks() {
    const t = this.ts.t.navbar;
    return [
      { label: t.whyme,    id: 'why-me'   },
      { label: t.skills,   id: 'skills'   },
      { label: t.projects, id: 'projects' },
      { label: t.contact,  id: 'contact'  },
    ];
  }

  setLang(l: 'DE' | 'EN') {
    this.ts.setLang(l);
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobile();
  }
}