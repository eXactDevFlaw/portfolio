import { Component, OnInit, OnDestroy, signal, inject, effect, untracked } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

type Phase = 'typing' | 'waiting' | 'deleting' | 'switching';

const ICONS = ['img/icon-location.png', 'img/icon-remote.png'];

@Component({
  selector: 'app-why-me',
  standalone: true,
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss'
})
export class WhyMeComponent implements OnInit, OnDestroy {
  ts = inject(TranslationService);

  currentIndex = signal(0);
  displayedText = signal('');
  phase = signal<Phase>('typing');

  private charIndex = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      this.ts.lang();
      untracked(() => this.resetAnimation());
    }, { allowSignalWrites: true });
  }

  get currentSuffix(): string {
    return this.ts.t.whyme.items[this.currentIndex()];
  }

  get currentIcon(): string {
    return ICONS[this.currentIndex()];
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private resetAnimation() {
    if (this.timer) clearTimeout(this.timer);
    this.charIndex = 0;
    this.displayedText.set('');
    this.phase.set('typing');
    this.tick();
  }

  private tick() {
    const suffix = this.currentSuffix;

    switch (this.phase()) {
      case 'typing':
        if (this.charIndex < suffix.length) {
          this.charIndex++;
          this.displayedText.set(suffix.slice(0, this.charIndex));
          this.timer = setTimeout(() => this.tick(), 100);
        } else {
          this.phase.set('waiting');
          this.timer = setTimeout(() => this.tick(), 1800);
        }
        break;

      case 'waiting':
        this.phase.set('deleting');
        this.tick();
        break;

      case 'deleting':
        if (this.charIndex > 0) {
          this.charIndex--;
          this.displayedText.set(suffix.slice(0, this.charIndex));
          this.timer = setTimeout(() => this.tick(), 35);
        } else {
          this.phase.set('switching');
          this.timer = setTimeout(() => this.tick(), 300);
        }
        break;

      case 'switching':
        this.currentIndex.set((this.currentIndex() + 1) % this.ts.t.whyme.items.length);
        this.charIndex = 0;
        this.displayedText.set('');
        this.phase.set('typing');
        this.timer = setTimeout(() => this.tick(), 100);
        break;
    }
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}