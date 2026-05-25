import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  http = inject(HttpClient);

  name = '';
  email = '';
  message = '';
  privacyAccepted = false;
  showErrors = false;
  sending = false;
  success = false;
  error = false;

  nameTouched = false;
  emailTouched = false;
  messageTouched = false;

  get showNameError(): boolean {
    return (this.nameTouched || this.showErrors) && !this.name.trim();
  }

  get showEmailError(): boolean {
    return (this.emailTouched || this.showErrors) && !this.email.trim();
  }

  get showEmailInvalid(): boolean {
    return (this.emailTouched || this.showErrors) && !!this.email.trim() && !this.isEmailValid;
  }

  get showMessageError(): boolean {
    return (this.messageTouched || this.showErrors) && !this.message.trim();
  }

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.email.trim());
  }

  get isValid(): boolean {
    return (
      this.name.trim().length > 0 &&
      this.isEmailValid &&
      this.message.trim().length > 0 &&
      this.privacyAccepted
    );
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  send() {
    this.showErrors = true;
    this.error = false;
    if (!this.isValid) return;

    this.sending = true;
    this.http.post('/send-mail.php', {
      name: this.name,
      email: this.email,
      message: this.message,
    }).subscribe({
      next: () => {
        this.sending = false;
        this.success = true;
      },
      error: () => {
        this.sending = false;
        this.error = true;
      },
    });
  }

  reset() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
    this.showErrors = false;
    this.success = false;
    this.error = false;
    this.nameTouched = false;
    this.emailTouched = false;
    this.messageTouched = false;
  }
}
