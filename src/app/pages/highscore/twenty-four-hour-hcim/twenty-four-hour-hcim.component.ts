import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GetPlayersService } from '../../../services/get-players.service';

@Component({
  selector: 'app-twenty-four-hour-hcim',
  templateUrl: './twenty-four-hour-hcim.component.html',
  styleUrls: ['./twenty-four-hour-hcim.component.css']
})
export class TwentyFourHourHcimComponent implements OnInit {

  @Input() players: any = [];
  error: string;
  feedbackEnabled = false;

  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllHardcoreIronmanPlayersDaily()
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
    this.router.navigate(['hiscore/hardcore-ironman/time/24h', username]);
  }
}
