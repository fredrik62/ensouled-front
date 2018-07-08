import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
players: any = [];
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.getPlayersService.getAllPlayer()
    .toPromise()
    .then((res) => {
     
    
     for (var p in res) {
       let accountData = {
       playerName: res[p].username,
       overAllRank: res[p].overAllRank,
       totalExperience: res[p].totalExperience,
       totalLevel:res[p].totalLevel
      } 
     this.players.push(accountData)
     }
    })
  }

  displayPlayer(name) {
    this.router.navigate(['highscore/', name]);
  }

}
