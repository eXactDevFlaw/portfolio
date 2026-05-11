import { Component, OnInit, OnDestroy, signal } from '@angular/core';

/** A single rotating stat entry shown in the Why Me section. */
interface StatItem {
  /** The text typed after "I am " (e.g. "located in Bremen."). */
  suffix: string;
  /** Path to the icon image displayed left of the text. */
  iconSrc: string;
}

/** Controls the typewriter animation state machine. */
type Phase = 'typing' | 'waiting' | 'deleting' | 'switching';

/** Why Me section with a looping typewriter animation cycling through personal stats. */
@Component({
  selector: 'app-why-me',
  standalone: true,
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss'
})
export class WhyMeComponent implements OnInit, OnDestroy {
  /** All stat items that cycle through the typewriter animation. */
  readonly items: StatItem[] = [
    { suffix: 'located in Bremen.',    iconSrc: 'img/icon-location.png' },
    { suffix: 'open to work remote.',  iconSrc: 'img/icon-remote.png'   },
  ];

  /** Index of the currently displayed stat item. */
  currentIndex = signal(0);

  /** The portion of the current suffix that has been typed so far. */
  displayedText = signal('');

  /** Current phase of the typewriter state machine. */
  phase = signal<Phase>('typing');

  private charIndex = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  /** Returns the currently active stat item. */
  get currentItem(): StatItem {
    return this.items[this.currentIndex()];
  }

  /**
   * Drives the typewriter state machine.
   * - typing: adds one character at a time
   * - waiting: pauses at the end of the full text
   * - deleting: removes one character at a time
   * - switching: advances to the next item and restarts
   */
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

  /** Smoothly scrolls to the Contact section. */
  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
