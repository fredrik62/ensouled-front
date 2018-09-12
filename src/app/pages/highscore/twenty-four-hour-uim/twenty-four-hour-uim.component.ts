import { Component, OnInit, Input } from '@angular/core';
import { GetPlayersService } from '../../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twenty-four-hour-uim',
  templateUrl: './twenty-four-hour-uim.component.html',
  styleUrls: ['./twenty-four-hour-uim.component.css']
})
export class TwentyFourHourUimComponent implements OnInit {

  @Input() players: any = [];
  error: string;
  feedbackEnabled = false;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllUltimateIronmanPlayersDaily()
    .toPromise()
    .then((players) => {

      for (let p in players) {
        let accountData = {
        playerName: players[p].username,
        overAllRank: players[p].overAllRank,
        totalExperience: players[p].totalExperience,
        totalLevel:players[p].totalLevel,
        
        
       } 
      this.players.push(accountData)

      this.players.sort((a, b) => {
        return b.totalExperience - a.totalExperience;
      });
      }
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
    
  }
  navigateToClickedPlayer($event) {
    const username = $event;
    this.router.navigate(['hiscore/ultimate-ironman/time/daily', username]);
  }
}




