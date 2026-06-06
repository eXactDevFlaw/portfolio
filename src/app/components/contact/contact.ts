import { Component, inject, ChangeDetectorRef } from '@angular/core';
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
  cdr = inject(ChangeDetectorRef);

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

  get isNameValid(): boolean {
    return this.name.trim().length >= 3;
  }

  get isMessageValid(): boolean {
    return this.message.trim().length >= 20;
  }

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.email.trim());
  }

  get showNameError(): boolean {
    return (this.nameTouched || this.showErrors) && !this.isNameValid;
  }

  get showEmailError(): boolean {
    return (this.emailTouched || this.showErrors) && !this.email.trim();
  }

  get showEmailInvalid(): boolean {
    return (this.emailTouched || this.showErrors) && !!this.email.trim() && !this.isEmailValid;
  }

  get showMessageError(): boolean {
    return (this.messageTouched || this.showErrors) && !this.isMessageValid;
  }

  get nameErrorMsg(): string {
    return this.name.trim().length === 0
      ? this.ts.t.contact.nameError
      : this.ts.t.contact.nameTooShort;
  }

  get messageErrorMsg(): string {
    return this.message.trim().length === 0
      ? this.ts.t.contact.messageError
      : this.ts.t.contact.messageTooShort;
  }

  get showPrivacyHint(): boolean {
    return this.isNameValid && this.isEmailValid && this.isMessageValid && !this.privacyAccepted;
  }

  get isValid(): boolean {
    return this.isNameValid && this.isEmailValid && this.isMessageValid && this.privacyAccepted;
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
        this.cdr.detectChanges();
      },
      error: () => {
        this.sending = false;
        this.error = true;
        this.cdr.detectChanges();
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
