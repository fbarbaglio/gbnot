import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'Informazioni di contatto, email, telefono e orari del Notaio Gregorio Barbaglio.' });
  }
}