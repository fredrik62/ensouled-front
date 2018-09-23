import { Component, OnInit, Input, Output } from '@angular/core';
import { PlayerLookupService } from '../../services/player-lookup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetPlayersService } from '../../services/get-players.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-experience-chart',
  templateUrl: './experience-chart.component.html',
  styleUrls: ['./experience-chart.component.css']
})
export class ExperienceChartComponent implements OnInit {
  chart: any = [];
  error: string;
 
  constructor(private activatedRoute: ActivatedRoute, private playerLookupService: PlayerLookupService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
         this.playerLookupService.getOnePlayer(username)
        .toPromise()
        .then((data) => {
        const graph = data;
        console.log(data);
    
     
     this.chart = new Chart('myChart', {
      type: 'line',
      data: {
          labels: [12,3,4,8],
          datasets: [{
                  data: [1,48,8,9],
                  borderColor: '#00CED1',
                  fill: false,
              },
              
          ]
      },
      options: {
          legend: {
              display: false
          },
          scales: {
              xAxes: [{
                  // display: this.desktopDisplay
                  display: false
                  
              }],
              yAxes: [{
                  display: true
              }]
          }
      }
    })


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

   }
  

    )
  }
}


