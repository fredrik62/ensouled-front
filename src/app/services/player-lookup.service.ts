import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerLookupService {
private playerUrl: String =  'http://localhost:3000/lookup/'
  constructor(private httpClient: HttpClient) { }

  getOnePlayer(playerUserName: any) {
    return this.httpClient.get(this.playerUrl + playerUserName)
    .map(result =>  result);
   }

}
