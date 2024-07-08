import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArtisanService } from '../artisants.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  standalone: true,
  selector: 'app-fiche-artisant',
  templateUrl: './fiche-artisant.component.html',
  styleUrls: ['./fiche-artisant.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class FicheArtisanComponent {
  artisan: any;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name !== null) {
      this.artisanService
        .getArtisanByName(name)
        .subscribe((artisan) => (this.artisan = artisan));
    }
  }
}
