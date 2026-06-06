import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  router = inject(Router);

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
    document.body.classList.toggle('menu-open', this.mobileOpen);
  }

  closeMobile() {
    this.mobileOpen = false;
    document.body.classList.remove('menu-open');
  }

  scrollTo(id: string) {
    this.closeMobile();
    if (this.router.url === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }
}