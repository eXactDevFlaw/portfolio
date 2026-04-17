import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { WhyMeComponent } from './components/why-me/why-me';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, WhyMeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
