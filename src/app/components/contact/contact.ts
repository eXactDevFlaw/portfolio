import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  privacyAccepted = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  send() {
    if (!this.privacyAccepted) return;
    // Hier kommt später die echte Send-Logik rein
    console.log({ name: this.name, email: this.email, message: this.message });
  }
}
