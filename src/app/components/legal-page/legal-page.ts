import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPageComponent {
  ts = inject(TranslationService);
  page = inject(ActivatedRoute).snapshot.data['page'] as 'privacy' | 'legal';
}
