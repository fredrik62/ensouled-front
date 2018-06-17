import { TestBed, inject } from '@angular/core/testing';

import { TrackPlayerService } from './track-player.service';

describe('TrackPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackPlayerService]
    });
  });

  it('should be created', inject([TrackPlayerService], (service: TrackPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
