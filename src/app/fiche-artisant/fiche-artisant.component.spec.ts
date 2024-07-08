import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheArtisantComponent } from './fiche-artisant.component';

describe('FicheArtisantComponent', () => {
  let component: FicheArtisantComponent;
  let fixture: ComponentFixture<FicheArtisantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheArtisantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheArtisantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
