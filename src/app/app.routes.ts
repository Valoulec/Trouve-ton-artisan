import { Routes } from '@angular/router';
import { ArtisanComponent } from './artisan/artisan.component';
import { ErrorComponent } from './error/error.component';
import { FicheArtisanComponent } from './fiche-artisant/fiche-artisant.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: ArtisanComponent },
  { path: 'fiche-artisant/:name', component: FicheArtisanComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },
];
