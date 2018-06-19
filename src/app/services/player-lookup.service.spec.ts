import { TestBed, inject } from '@angular/core/testing';

import { PlayerLookupService } from './player-lookup.service';

describe('PlayerLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerLookupService]
    });
  });

  it('should be created', inject([PlayerLookupService], (service: PlayerLookupService) => {
    expect(service).toBeTruthy();
  }));
});
