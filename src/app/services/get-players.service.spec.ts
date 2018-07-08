import { TestBed, inject } from '@angular/core/testing';

import { GetPlayersService } from './get-players.service';

describe('GetPlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPlayersService]
    });
  });

  it('should be created', inject([GetPlayersService], (service: GetPlayersService) => {
    expect(service).toBeTruthy();
  }));
});
