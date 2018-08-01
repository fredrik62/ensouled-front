import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TwitterFeedService {
  private twitterFeed = 'http://localhost:3000/twitter-feed';

  constructor(private httpClient: HttpClient) { }

  showHcimDeaths() {
    return this.httpClient.get(this.twitterFeed)
    .map(result =>  result);
 }

}
