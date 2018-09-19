import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPlayersService } from '../../../services/get-players.service';

@Component({
  selector: 'app-monthly-layout',
  templateUrl: './monthly-layout.component.html',
  styleUrls: ['./monthly-layout.component.css']
})
export class MonthlyLayoutComponent implements OnInit {
  rsn: String;
  playerStats: any = [];
  error: string;
  constructor(private activatedRoute: ActivatedRoute, private getPlayersService: GetPlayersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
      this.getPlayersService.getOnePlayerMonthly(username)
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
