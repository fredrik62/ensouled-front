import { TestBed, inject } from '@angular/core/testing';

import { GrandExchangeService } from './grand-exchange.service';

describe('GrandExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrandExchangeService]
    });
  });

  it('should be created', inject([GrandExchangeService], (service: GrandExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
