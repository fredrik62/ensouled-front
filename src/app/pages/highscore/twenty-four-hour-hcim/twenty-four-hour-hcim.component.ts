import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetPlayersService } from '../../../services/get-players.service';

@Component({
  selector: 'app-twenty-four-hour-hcim',
  templateUrl: './twenty-four-hour-hcim.component.html',
  styleUrls: ['./twenty-four-hour-hcim.component.css']
})
export class TwentyFourHourHcimComponent implements OnInit {

  players: any = [];
  error: string;
  feedbackEnabled = false;
  rank: any = 1;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllHardcoreIronmanPlayers()
    .toPromise()
    .then((players) => {
console.log(players);
    //   for (var p in players) {
    //     let accountData = {
    //     playerName: players[p].username,
    //     overAllRank: players[p].overAllRank,
    //     totalExperience: players[p].totalExperience,
    //     totalLevel:players[p].totalLevel,
    //     rank: this.rank++
        
    //    } 
    //   this.players.push(accountData)

    //   this.players.sort((a, b) => {
    //     return b.totalExperience - a.totalExperience;
    //   });
    //   }
    //  console.log(this.players);

    
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
    
  }

}
