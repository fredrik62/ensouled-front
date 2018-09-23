import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerLookupService {
private playerUrl: String =  'http://localhost:3000/experience-chart/'
  constructor(private httpClient: HttpClient) { }

  getOnePlayer(playerUsername: any) {
    return this.httpClient.get(this.playerUrl + playerUsername)
    .map(result =>  result);
   }

}
