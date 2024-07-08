import { TestBed } from '@angular/core/testing';

import { ArtisantsService } from './artisants.service';

describe('ArtisantsService', () => {
  let service: ArtisantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
