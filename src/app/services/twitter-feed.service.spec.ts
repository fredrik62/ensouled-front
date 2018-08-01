import { TestBed, inject } from '@angular/core/testing';

import { TwitterFeedService } from './twitter-feed.service';

describe('TwitterFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterFeedService]
    });
  });

  it('should be created', inject([TwitterFeedService], (service: TwitterFeedService) => {
    expect(service).toBeTruthy();
  }));
});
