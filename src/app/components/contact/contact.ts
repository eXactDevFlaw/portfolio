import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  ts = inject(TranslationService);

  name = '';
  email = '';
  message = '';
  privacyAccepted = false;
  showErrors = false;

  get isValid(): boolean {
    return (
      this.name.trim().length > 0 &&
      this.email.trim().length > 0 &&
      this.message.trim().length > 0 &&
      this.privacyAccepted
    );
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  send() {
    this.showErrors = true;
    if (!this.isValid) return;
    console.log({ name: this.name, email: this.email, message: this.message });
  }
}
