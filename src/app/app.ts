import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Notaio Gregorio Barbaglio');

  collapseMenu() {
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}
