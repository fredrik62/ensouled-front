import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetOneSkillService {


  private playerUrl: String =  'http://localhost:3000/getskill/'

  constructor(private httpClient: HttpClient) { }

  getOneSkill(playerUserName: any) {
    return this.httpClient.get(this.playerUrl + playerUserName)
    .map(result =>  result);
   }
}


