import { Component, OnInit } from '@angular/core';
import { TwitterFeedService } from '../../../services/twitter-feed.service';
import { Router } from '@angular/router';
import { SearchFilterPipe } from '../../../pipes/search-filter.pipe';

@Component({
  selector: 'app-all-twitter-deaths',
  templateUrl: './all-twitter-deaths.component.html',
  styleUrls: ['./all-twitter-deaths.component.css']
})
export class AllTwitterDeathsComponent implements OnInit {
  playerInfo: any = [];
  error: string;
  feedbackEnabled = false;
  constructor(private twitterFeedService: TwitterFeedService, private router: Router) { }


  ngOnInit() {
    
    this.twitterFeedService.showAllHcimDeaths()
    .toPromise()
    .then((deaths) => {
     
     Object.keys(deaths).map((info) => {
       
       let death = {
         name: deaths[info].data.playerUsername,
         overAllXp: deaths[info].data.overAllXp,
         overAllRank: deaths[info].data.overallRank,
         totalLevel: deaths[info].data.totalLevel,
         statsAtDeath: deaths[info].data.statsAtDeath,
         postSource: deaths[info].data.source,
         timeOfDeath: deaths[info].updated
         
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
