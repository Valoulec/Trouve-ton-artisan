import { Routes } from '@angular/router';
import { ArtisanComponent } from './artisan/artisan.component';
import { FicheArtisanComponent } from './fiche-artisant/fiche-artisant.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: ArtisanComponent },
  { path: 'fiche-artisant/:name', component: FicheArtisanComponent },
  { path: '*', component: ErrorComponent },
];
