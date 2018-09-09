import { Component, OnInit, Input } from '@angular/core';
import { GetPlayersService } from '../../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-reg',
  templateUrl: './weekly-reg.component.html',
  styleUrls: ['./weekly-reg.component.css']
})
export class WeeklyRegComponent implements OnInit {

  @Input() players: any = [];
  error: string;
  feedbackEnabled = false;
  rank: any = 1;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllRegPlayersWeekly()
    .toPromise()
    .then((players) => {
  
      for (let p in players) {
        let accountData = {
        playerName: players[p].username,
        overAllRank: players[p].overAllRank,
        totalExperience: players[p].totalExperience,
        totalLevel:players[p].totalLevel,
        rank: this.rank++
        
       } 
      this.players.push(accountData)

      this.players.sort((a, b) => {
        return b.totalExperience - a.totalExperience;
      });
      }
     console.log(this.players);

    
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }
}
