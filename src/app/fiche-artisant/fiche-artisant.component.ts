import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
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
    RouterOutlet,
  ],
})
export class FicheArtisanComponent implements OnInit {
  artisan: any;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService,
    private sanitizer: DomSanitizer
  ) {}

  name: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.subject && this.message) {
      (error: any) => {
        console.error(
          'Une erreur est survenue lors de la soumission du formulaire.'
        );
      };
    } else {
      console.error('Veuillez remplir tous les champs du formulaire.');
    }
  }

  sanitizeInput(input: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(input);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.artisanService.getArtisanByName(name).subscribe((artisan) => {
          this.artisan = artisan;
        });
      }
    });
  }
}
