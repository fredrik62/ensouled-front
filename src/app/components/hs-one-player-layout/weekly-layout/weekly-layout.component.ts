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
console.log(this.player.Skills[0]);
        for (let key in this.player) {
        let onePlayerData = {
          username: this.player.username,
          overAllRank: this.player.overAllRank,
          totalExperience: this.player.totalExperience,
          totalLevel: this.player.totalLevel,
          updated: this.player.updated,
          skills: this.player.Skills[0]

        }
      
        // console.log("this is the skill " + onePlayerData.skills[0].Agility.agilityRank);
        // console.log(" this is the rank gain " + onePlayerData.skills[0].Agility.agility);
        this.playerStats.push(onePlayerData);
        
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
        
      
  
       
