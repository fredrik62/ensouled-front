import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPlayersService } from '../../../services/get-players.service';

@Component({
  selector: 'app-daily-layout',
  templateUrl: './daily-layout.component.html',
  styleUrls: ['./daily-layout.component.css']
})
export class DailyLayoutComponent implements OnInit {
  
  playerStats: any = [];
  error: string;
  constructor(private activatedRoute: ActivatedRoute,private getPlayersService: GetPlayersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
      this.getPlayersService.getOnePlayerDaily(username)
      .toPromise()
      .then((player) => {
        console.log(player);
      })
      .catch((err) => {
        if (err) {
          this.error = err.error.code; 
          
        } 
      });
    })
    }
    }
      

  
