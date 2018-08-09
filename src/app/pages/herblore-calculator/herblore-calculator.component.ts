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

guam: any = Number;
marrentill: any = Number;
tarromin: any = Number;
harralander: any = Number;


error: string;
feedbackEnabled = false;

selectedOption: any;

  constructor(private getOneSkillService: GetOneSkillService) { }

  ngOnInit() {

    const ensouledData = {
      "info":[
          {"Name":"Guam Leaf",
          "binding": this.guam,
          "id": "13448",
          "Potions":[
            {"name": "Attack Potion", "experience": 25},
            {"name": "Guam Tar", "experience": 30},
            ]
          }, 
          {"Name":"Marrentill",
          "binding": this.marrentill,
          "id": "13448",
          "Potions":[
            {"name": "Anti Poison", "experience": 37.5},
            {"name": "Marrentill Tar", "experience": 42.5},
             
              
            ]
          }, 
          {"Name":"Tarromin",
          "binding": this.tarromin,
          "id": "13448",
          "Potions":[
            {"name": "Strength Potion", "experience": 50},
            {"name": "Serum 207", "experience": 50},
            {"name": "Tarrmonin Tar", "experience": 55},
              
            ]
          }, 
          {"Name":"Harralander",
          "binding": this.harralander,
          "id": "13448",
          "Potions":[
            {"name": "Restore Potion", "experience": 62.5},
            {"name": "Energy Potion", "experience": 67.5},
            {"name": "Combat Potion", "experience": 84},
            {"name": "Harralander Tar", "experience": 72.5},
              
            ]
          }, 
         
          
        ]
      };

      for (var z  = 0; z < ensouledData.info.length; z++) {
        var pots = [];
        var name = [];
        var xp = [];
        name.push(ensouledData.info[z].Name);
           for (var j=0; j < ensouledData.info[z].Potions.length; j++) {
            
             pots.push(ensouledData.info[z].Potions[j].name);
             xp.push(ensouledData.info[z].Potions[j].experience);
                   
       
       }
       let t = {
         inputBinding: ensouledData.info[z].binding,
         name: name,
         pots: pots,
         xp: xp
       }
      this.herbs.push(t);
      }
      console.log(this.herbs);
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

calculate(){
  console.log("i have been clicked");

  for(let x = 0; x < this.herbs.length; x++) {
    let allInputs = this.herbs[x].binding || 0;
    // console.log(allInputs);
    let sum = this.herbs[x].xp[0] * allInputs;
    let sum1 = this.herbs[x].xp[1] * allInputs;
   
}

 }


 //todo

 /*
 
 find runescape level table and compare xp to current level + check how much their xp will get closer to next lvl
 
 
 */


}