import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TwitterFeedService {
  private threeTweets = 'http://localhost:3000/three-tweets';
  private allTweets = 'http://localhost:3000/all-tweets';

  constructor(private httpClient: HttpClient) { }
//this one gets only 3 tweets which are displayed on index page
  showHcimDeaths() {
    return this.httpClient.get(this.threeTweets)
    .map(result =>  result);
 }

 showAllHcimDeaths() {
  return this.httpClient.get(this.allTweets)
  .map(result =>  result);
}

}
