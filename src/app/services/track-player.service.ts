import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrackPlayerService {
private regular = 'http://localhost:3000/trackregular';
private ironman = 'http://localhost:3000/trackironman';
private hardcoreIronman = 'http://localhost:3000/trackhardcore';
private ultimateIronman = 'http://localhost:3000/trackultimate';


  constructor(private httpClient: HttpClient) { }

  startTrackingRegularPlayer(playerUserName: any) {
     return this.httpClient.post(`${this.regular}/user`, playerUserName)
      .toPromise()
      .then((data) => {
        var x = data;
      })
  }

  startTrackingIronmanPlayer(playerUserName: any,) {
    return this.httpClient.post(`${this.ironman}/user`, playerUserName )
     .toPromise()
     .then((data) => {
       var x = data;
     })
 }

 startTrackingHardcoreIronmanPlayer(playerUserName: any,) {
  return this.httpClient.post(`${this.hardcoreIronman}/user`, playerUserName )
   .toPromise()
   .then((data) => {
     var x = data;
   })
}

startTrackingUltimateIronmanPlayer(playerUserName: any,) {
  return this.httpClient.post(`${this.ultimateIronman}/user`, playerUserName )
   .toPromise()
   .then((data) => {
     var x = data;
   })
}

}
