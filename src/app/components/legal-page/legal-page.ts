import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPageComponent {
  ts = inject(TranslationService);
  page = inject(ActivatedRoute).snapshot.data['page'] as 'privacy' | 'legal';
  location = inject(Location);
}
