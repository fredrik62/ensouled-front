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

guam: any;
marrentill: any;
tarromin: any;
harralander: any;


error: string;
feedbackEnabled = false;

  constructor(private getOneSkillService: GetOneSkillService) { }

  ngOnInit() {

    const ensouledData = {
      "info":[
          {"Name":"Guam Leaf",
          "binding": this.guam,
          "id": "13448",
          "Potions":[
            {"name": "Attack Potion", "value": 20},
            {"name": "Guam Tar", "value": 20},
            ]
          }, 
          {"Name":"Marrentill",
          "binding": this.marrentill,
          "id": "13448",
          "Potions":[
            {"name": "Anti Poison", "value": 20},
            {"name": "Marrentill Tar", "value": 20},
             
              
            ]
          }, 
          {"Name":"Tarromin",
          "binding": this.tarromin,
          "id": "13448",
          "Potions":[
            {"name": "Strength Potion", "value": 20},
            {"name": "Serum 207", "value": 20},
            {"name": "Tarrmonin Tar", "value": 20},
              
            ]
          }, 
          {"Name":"Harralander",
          "binding": this.harralander,
          "id": "13448",
          "Potions":[
            {"name": "Restore Potion", "value": 20},
            {"name": "Energy Potion", "value": 20},
            {"name": "Combat Potion", "value": 20},
            {"name": "Harralander Tar", "value": 20},
              
            ]
          }, 
         
          
        ]
      };

      for (var z  = 0; z < ensouledData.info.length; z++) {
        var pots = [];
        var name = []
        name.push(ensouledData.info[z].Name);
           for (var j=0; j < ensouledData.info[z].Potions.length; j++) {
            
             pots.push(ensouledData.info[z].Potions[j].name);
                   
       
       }
       let t = {
         name: name,
         pots: pots
       }
      this.herbs.push(t);
      }
  }

  // submitForm(form) {
  //   const user = this.username
  //   if (user.length > 1 ) {
  //     this.loading = true;
  //   }
  //   this.feedbackEnabled = true;
  //  if (user === undefined || user.length === 0 || user.length > 12) {
  //    alert("error with name");
  //  } else {
  //    this.getOneSkillService.getOneSkill(user)
  //    .toPromise()
  //    .then((result) => {
  //      this.playerStats.push(result); 
  //      this.checkPlayerLevel();
  //      })
  //      .catch((err) => {
  //       if (err) {
  //         this.error = err.error.code; 
  //         this.feedbackEnabled = false;
  //       } 
  //     });
  // }
      
  // }

//   checkPlayerLevel() {
//    this.playerLevel = this.playerStats[0].Herblore.level;
//    const playerHerbloreXp = this.playerStats[0].Herblore.xp;
//    console.log(playerHerbloreXp);
//   }

// calculate(){
//   console.log("i have been clicked");
// }

 }


 //todo

 /*
 
 find runescape level table and compare xp to current level + check how much their xp will get closer to next lvl
 
 
 */


