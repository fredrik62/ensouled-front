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
  total: any = [];
  updated: any = [];
  error: string;
 
  constructor(private activatedRoute: ActivatedRoute, private playerLookupService: PlayerLookupService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
         this.playerLookupService.getOnePlayer(username)
        .toPromise()
        .then((data) => {
        const graph = data;
        

        Object.keys(graph).map(key => {
          const experience = graph[key].totalExperience;
          const player = graph[key].updatedAt;
          const event = new Date(player);
          this.total.push(experience);
          this.updated.push(event.toString());
          
          
      });
    console.log(this.updated);
    console.log(this.total);
    

     this.chart = new Chart('myChart', {
      type: 'line',
      data: {
          labels: this.updated,
          datasets: [{
                  data: this.total,
                  borderColor: '#32CD32',
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
                  
                  display: false
                  
              }],
              yAxes: [{
                ticks: {
                  fontSize: 14,
                  fontColor: '#32CD32'
              },
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


