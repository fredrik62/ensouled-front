import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrackPlayerService {
private rsn = 'http://localhost:3000/add'
  constructor(private httpClient: HttpClient) { }

  startTrackingPlayer(playerUserName: any) {
     return this.httpClient.post(`${this.rsn}/user`, playerUserName)
      .toPromise()
      .then((data) => {
        var x = data;
      })
  }

}
