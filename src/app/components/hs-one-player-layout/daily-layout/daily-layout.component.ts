import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetPlayersService } from '../../../services/get-players.service';
import { PlayerLookupService } from '../../../services/player-lookup.service';

@Component({
  selector: 'app-daily-layout',
  templateUrl: './daily-layout.component.html',
  styleUrls: ['./daily-layout.component.css']
})
export class DailyLayoutComponent implements OnInit {
  @Input() playerStats: any = [];
  @Input() playerData: any = [];
  negativeRank: Boolean = false;
  neutralXp: Boolean = false;
  player: any = [];
  onePlayerData: any;
  onePlayerChartData: any;
  onePlayerChartData1: any;
  error: string;
  constructor(private activatedRoute: ActivatedRoute, private getPlayersService: GetPlayersService, private router: Router, private playerLookupService: PlayerLookupService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
      this.getPlayersService.getOnePlayerMonthly(username)
        .toPromise()
        .then((data) => {
          this.player = data;
          
          
          let account = {

            username: this.player.username,
            overAllRank: this.player.overAllRank,
            totalExperience: this.player.totalExperience,
            totalLevel: this.player.totalLevel,
            updated: new Date(this.player.updated).toString(),
            mode: this.player.mode
          }
          
          this.playerData.push(account);

          const levels = this.player.Skills[0];

          for (let key in levels) {
            if (levels.hasOwnProperty(key)) {


              this.onePlayerData = {
                skills: key,
                skillXpGained: levels[key][Object.keys(levels[key])[0]],
                skillRankChange: levels[key][Object.keys(levels[key])[1]],
                negativeRank: null,
                neutralXp: null

              }
              if (this.onePlayerData.skillRankChange < 0) {
                this.onePlayerData.negativeRank = true;
              }
              if (this.onePlayerData.skillXpGained === 0) {
                this.onePlayerData.neutralXp = true;
              }

              this.playerStats.push(this.onePlayerData);
              

            }
          }

        })
        .catch((err) => {
          if (err) {
            if (err.status === 500) {
              this.router.navigate(['500-server-error']);
            } else if (err.status === 404) {
              this.router.navigate(['404']);
            } else {
              this.error = err.error.code;
            }
          }
        });
    })
  } 
}
      
        
      
  
       



  
