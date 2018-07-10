import { Component, OnInit } from '@angular/core';
import { PlayerLookupService } from '../../services/player-lookup.service';
import { GetOneSkillService } from '../../services/get-one-skill.service';

@Component({
  selector: 'app-herblore-calculator',
  templateUrl: './herblore-calculator.component.html',
  styleUrls: ['./herblore-calculator.component.css']
})
export class HerbloreCalculatorComponent implements OnInit {
  public inputValidator(event: any) {
    
    const pattern = /^[a-zA-Z0-9_ ]*$/;   
    
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/^[a-zA-Z0-9_ ]*$/g, "");
    

    }
  }

iconUrl: String;
herbs: any = [];
names: any;
playerStats: any = [];
playerLevel: Number;
username: String;
loading: boolean = false;

//guam herbs
attackPotion: Number;
guamTar: Number;

//marrentill
antiPotion: Number;
marrentillTar: Number;

error: string;
feedbackEnabled = false;

  constructor(private getOneSkillService: GetOneSkillService) { }

  ngOnInit() {


    this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1529576970247_obj_sprite.gif?id='; 
   
   

 this.names = ['Guam', 'Marrentill', 'Ranarr', 'Snapdragon'];


    
   
  }

  submitForm(form) {
    const user = this.username
    if (user.length > 1 ) {
      this.loading = true;
    }
    this.feedbackEnabled = true;
   if (user === undefined || user.length === 0 || user.length > 12) {
     alert("error with name");
   } else {
     this.getOneSkillService.getOneSkill(user)
     .toPromise()
     .then((result) => {
       this.playerStats.push(result); 
       this.checkPlayerLevel();
       })
       .catch((err) => {
        if (err) {
          this.error = err.error.code; 
          this.feedbackEnabled = false;
        } 
      });
  }
      
  }

  checkPlayerLevel() {
   this.playerLevel = this.playerStats[0].Herblore.level;
   const playerHerbloreXp = this.playerStats[0].Herblore.xp;
   console.log(playerHerbloreXp);
  }

calculate(){
  console.log("i have been clicked");
}

 }


 //todo

 /*
 
 find runescape level table and compare xp to current level + check how much their xp will get closer to next lvl
 
 
  var totals = {
        'any': {
            'count': 0,
            'price': 0
        },
        'easy': {
            'count': 0,
            'price': 0
        },
        'medium': {
            'count': 0,
            'price': 0
        },
        'hard': {
            'count': 0,
            'price': 0
        },
        'elite': {
            'count': 0,
            'price': 0
        },
        'master': {
            'count': 0,
            'price': 0
        }
    };
 
 */


