import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  ts = inject(TranslationService);

  name = '';
  email = '';
  message = '';
  privacyAccepted = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  send() {
    if (!this.privacyAccepted) return;
    console.log({ name: this.name, email: this.email, message: this.message });
  }
}
