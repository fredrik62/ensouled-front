import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPlayersService } from '../../../services/get-players.service';

@Component({
  selector: 'app-weekly-layout',
  templateUrl: './weekly-layout.component.html',
  styleUrls: ['./weekly-layout.component.css']
})
export class WeeklyLayoutComponent implements OnInit {
  @Input() playerStats: any = [];
  player: any = [];
  error: string;
  constructor(private activatedRoute: ActivatedRoute, private getPlayersService: GetPlayersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
      this.getPlayersService.getOnePlayerWeekly(username)
      .toPromise()
      .then((data) => {
        this.player = data;
        //todo
        //slice data in the html
       const levels = this.player.Skills[0];
      
       for (var key in levels) {
       if (levels.hasOwnProperty(key)) {
      //  console.log(skills[key]);

      
      let onePlayerData = {
        username: this.player.username,
        overAllRank: this.player.overAllRank,
        totalExperience: this.player.totalExperience,
        totalLevel: this.player.totalLevel,
        updated: this.player.updated,
        skills: key,
        skillXpGained: levels[key][Object.keys(levels[key])[0]],
        skillRankChange: levels[key][Object.keys(levels[key])[1]],
        
      }
      
      this.playerStats.push(onePlayerData);
  }
      
}
        
      
      })
      .catch((err) => {
        if (err) {
          this.error = err.error.code; 
          
        } 
      });
    })
  }
}
        
      
  
       
