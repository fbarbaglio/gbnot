import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotaioComponent } from './notaio/notaio.component';
import { DoveTrovarmiComponent } from './dove-trovarmi/dove-trovarmi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziComponent } from './servizi/servizi';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notaio', component: NotaioComponent },
  { path: 'dove-trovarmi', component: DoveTrovarmiComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'contatti', component: ContattiComponent }
];
