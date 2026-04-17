import { Component, OnInit, OnDestroy, signal } from '@angular/core';

interface StatItem {
  suffix: string;
  iconSrc: string;
}

type Phase = 'typing' | 'waiting' | 'deleting' | 'switching';

@Component({
  selector: 'app-why-me',
  standalone: true,
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss'
})
export class WhyMeComponent implements OnInit, OnDestroy {
  readonly items: StatItem[] = [
    { suffix: 'located in Bremen.',    iconSrc: 'img/icon-location.png' },
    { suffix: 'open to work remote.',  iconSrc: 'img/icon-remote.png'   },
  ];

  currentIndex = signal(0);
  displayedText = signal('');
  phase = signal<Phase>('typing');

  private charIndex = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  get currentItem(): StatItem {
    return this.items[this.currentIndex()];
  }

  private tick() {
    const item = this.currentItem;

    switch (this.phase()) {
      case 'typing':
        if (this.charIndex < item.suffix.length) {
          this.charIndex++;
          this.displayedText.set(item.suffix.slice(0, this.charIndex));
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
          this.displayedText.set(item.suffix.slice(0, this.charIndex));
          this.timer = setTimeout(() => this.tick(), 35);
        } else {
          this.phase.set('switching');
          this.timer = setTimeout(() => this.tick(), 300);
        }
        break;

      case 'switching':
        this.currentIndex.set((this.currentIndex() + 1) % this.items.length);
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
