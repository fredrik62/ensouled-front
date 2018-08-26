import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterFeedService } from '../../../services/twitter-feed.service';

@Component({
  selector: 'app-three-twitter-deaths',
  templateUrl: './three-twitter-deaths.component.html',
  styleUrls: ['./three-twitter-deaths.component.css']
})
export class ThreeTwitterDeathsComponent implements OnInit {
  playerInfo: any = [];
  error: string;
  feedbackEnabled = false;
  constructor(private twitterFeedService: TwitterFeedService, private router: Router) { }

  ngOnInit() {
  
    this.twitterFeedService.showHcimDeaths()
    .toPromise()
    .then((deaths) => {
      
      var date = new Date(deaths[0].updated);
      var newDate = date.toISOString().substring(0, 10);
      console.log(deaths)
      Object.keys(deaths).map((info) => {
        
        let death = {
          name: deaths[info].data.playerUsername,
          overAllXp: deaths[info].data.overAllXp,
          overAllRank: deaths[info].data.overallRank,
          totalLevel: deaths[info].data.totalLevel,
          statsAtDeath: deaths[info].data.statsAtDeath,
          postSource: deaths[info].data.source,
          timeOfDeath: newDate
          
         }
         this.playerInfo.push(death);
       })
 
     
     })
     .catch((err) => {
       if (err) {
         this.error = err.error.code; 
         if (err.status === 500) {
           this.router.navigate(['500-server-error']);
 
         }
         } 
     });
   }

}
