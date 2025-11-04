import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-notaio',
  standalone: true,
  imports: [],
  templateUrl: './notaio.component.html',
  styleUrl: './notaio.component.css'
})
export class NotaioComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'Informazioni sul Notaio Gregorio Barbaglio e la sua professione.' });
  }
}