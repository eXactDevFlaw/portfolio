import { Injectable, signal } from '@angular/core';

const EN = {
  navbar: { whyme: 'Why me', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
  hero: { subtitle: 'FRONTEND DEVELOPER' },
  whyme: {
    title: 'Why me',
    prefix: 'I am ',
    items: ['located in Bremen.', 'open to work remote.'],
    description: 'I am a passionate Frontend Developer with a strong focus on Angular and TypeScript. I enjoy building clean, maintainable code and love working in teams to create great products.',
    button: "Let's talk",
  },
  skills: {
    title: 'My Skills',
    learning: 'I am currently learning',
    learningDesc: 'Show that you are motivated to continually improve your skills, implement innovative solutions and stay abreast of new technologies.',
  },
  projects: {
    title: 'My Projects',
    about: 'About the project',
    duration: 'Duration',
    workProcess: 'How I have organised my work process',
    groupExp: 'My group work experience',
    technologies: 'Technologies',
    liveTest: 'Live Test',
    github: 'GitHub',
    comingSoon: 'Screenshot coming soon',
  },
  references: {
    title: "Need a teamplayer? Here's what my colleagues say about me",
    linkedin: 'LinkedIn Profile',
    projectLabel: 'Project',
  },
  contact: {
    title: 'Contact me',
    desc: 'Feel free to get in touch with job offers or opportunities such as Frontend Developer or Angular Developer roles.',
    nameLabel: 'Your name',
    emailLabel: 'Your Email',
    messageLabel: 'Your Message',
    nameError: 'Your name is required',
    nameTooShort: 'Name must be at least 3 characters',
    emailError: 'Your Email is required',
    emailInvalid: 'Please enter a valid email address',
    messageError: 'Your Message is required',
    messageTooShort: 'Message must be at least 20 characters',
    privacyText: "I've read the",
    privacyLink: 'privacy policy',
    privacyEnd: 'and agree to the processing of my data as outlined.',
    privacyError: 'Please accept the privacy policy.',
    send: 'Send',
    sending: 'Sending...',
    successTitle: 'Message sent!',
    successText: "Thank you for reaching out. I'll get back to you soon.",
    errorText: 'Something went wrong. Please try again.',
  },
  footer: { legal: 'Legal notice' },
};

const DE = {
  navbar: { whyme: 'Über mich', skills: 'Fähigkeiten', projects: 'Projekte', contact: 'Kontakt' },
  hero: { subtitle: 'FRONTEND ENTWICKLER' },
  whyme: {
    title: 'Warum ich',
    prefix: 'Ich bin ',
    items: ['in Bremen zuhause.', 'remote verfügbar.'],
    description: 'Ich bin ein leidenschaftlicher Frontend-Entwickler mit Schwerpunkt auf Angular und TypeScript. Ich entwickle gerne sauberen, wartbaren Code und arbeite im Team, um großartige Produkte zu liefern.',
    button: 'Kontakt aufnehmen',
  },
  skills: {
    title: 'Meine Fähigkeiten',
    learning: 'Ich lerne gerade',
    learningDesc: 'Ich bin motiviert, meine Fähigkeiten stetig zu verbessern, innovative Lösungen umzusetzen und neue Technologien zu erlernen.',
  },
  projects: {
    title: 'Meine Projekte',
    about: 'Über das Projekt',
    duration: 'Dauer',
    workProcess: 'Wie ich meinen Arbeitsprozess organisiert habe',
    groupExp: 'Meine Teamarbeitserfahrung',
    technologies: 'Technologien',
    liveTest: 'Live Test',
    github: 'GitHub',
    comingSoon: 'Screenshot folgt',
  },
  references: {
    title: 'Teamplayer gesucht? Das sagen meine Kollegen über mich!',
    linkedin: 'LinkedIn Profil',
    projectLabel: 'Projekt',
  },
  contact: {
    title: 'Kontakt',
    desc: 'Melde dich gerne mit Jobangeboten oder Möglichkeiten als Frontend Developer oder Angular Developer.',
    nameLabel: 'Dein Name',
    emailLabel: 'Deine E-Mail',
    messageLabel: 'Deine Nachricht',
    nameError: 'Name ist erforderlich',
    nameTooShort: 'Name muss mindestens 3 Zeichen lang sein',
    emailError: 'E-Mail ist erforderlich',
    emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein',
    messageError: 'Nachricht ist erforderlich',
    messageTooShort: 'Nachricht muss mindestens 20 Zeichen lang sein',
    privacyText: 'Ich habe die',
    privacyLink: 'Datenschutzerklärung',
    privacyEnd: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
    privacyError: 'Bitte akzeptiere die Datenschutzerklärung.',
    send: 'Senden',
    sending: 'Wird gesendet...',
    successTitle: 'Nachricht gesendet!',
    successText: 'Danke für deine Nachricht. Ich melde mich bald bei dir.',
    errorText: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
  },
  footer: { legal: 'Impressum' },
};

export type Translations = typeof EN;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  lang = signal<'DE' | 'EN'>((localStorage.getItem('lang') as 'DE' | 'EN') ?? 'EN');

  setLang(language: 'DE' | 'EN') {
    localStorage.setItem('lang', language);
    this.lang.set(language);
  }

  get t(): Translations {
    return this.lang() === 'DE' ? DE : EN;
  }
}
