import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dove-trovarmi',
  standalone: true,
  imports: [],
  templateUrl: './dove-trovarmi.component.html',
  styleUrl: './dove-trovarmi.component.css'
})
export class DoveTrovarmiComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'Ubicazioni degli studi del Notaio Gregorio Barbaglio con mappe interattive.' });
  }
}