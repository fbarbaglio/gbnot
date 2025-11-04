import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'Benvenuti nel sito del Notaio Gregorio Barbaglio. Scopri i nostri servizi.' });
  }
}