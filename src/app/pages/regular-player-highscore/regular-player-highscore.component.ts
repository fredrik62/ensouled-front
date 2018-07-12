import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regular-player-highscore',
  templateUrl: './regular-player-highscore.component.html',
  styleUrls: ['./regular-player-highscore.component.css']
})
export class RegularPlayerHighscoreComponent implements OnInit {
  players: any = [];
  error: string;
  feedbackEnabled = false;
    constructor(private getPlayersService: GetPlayersService, private router: Router) { }
  
    ngOnInit() {
      this.getPlayersService.getAllPlayers()
      .toPromise()
      .then((res) => {
       
      
       for (var p in res) {
         let accountData = {
         playerName: res[p].username,
         overAllRank: res[p].overAllRank,
         totalExperience: res[p].totalExperience,
         totalLevel:res[p].totalLevel,
         id: res[p]._id
        } 
       this.players.push(accountData)
       }
      })
      .catch((err) => {
        if (err) {
          this.error = err.error.code; 
          this.feedbackEnabled = false;
        } 
      });
    }
  
    displayPlayer(name) {
      this.router.navigate(['highscore/normie', name]);
    }
  
  }
  
