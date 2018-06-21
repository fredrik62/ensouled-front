import { Component, OnInit } from '@angular/core';
import { PlayerLookupService } from '../../services/player-lookup.service';

@Component({
  selector: 'app-herblore-calculator',
  templateUrl: './herblore-calculator.component.html',
  styleUrls: ['./herblore-calculator.component.css']
})
export class HerbloreCalculatorComponent implements OnInit {
iconUrl: String;
herbs: any = [];
playerStats: any = [];
playerLevel: Number;
username: String;

//guam herbs
attackPotion: Number;
guamTar: Number;

//marrentill
antiPotion: Number;
marrentillTar: Number;

  constructor(private playerLookupService: PlayerLookupService) { }

  ngOnInit() {


    this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1528713058107_obj_sprite.gif?id='; 
    const guamData = {
      "herbs": [


      {"Guam":[{"Name":"Attack Potion", "Xp": 25, "Level": 3, "binding": this.attackPotion, "id": "121"}]}, 
      {"Guam":[{"Name":"Guam Tar", "Xp": 30, "Level": 3, "binding": this.guamTar, "id": "10142"}]},
    ]} 

    const MarrentillData = {
      "herbs": [
              
    {"Marrentill":[{"Name":"Anti Potion", "Xp": 37.5, "Level": 5, "binding": this.antiPotion, "id": "175"}]}, 
    {"Marrentill":[{"Name":"Marrentill Tar", "Xp": 42.5, "Level": 31, "binding": this.marrentillTar, "id": "10143"}]},
  
  ]} 






         for (let z = 0; z < guamData.herbs.length; z++) {

          const guamHerbs = {
            name: guamData.herbs[z].Guam[0].Name,
            guamIcon: this.iconUrl + '249'
            
          }

          const marrentillHerbs = {
            name: MarrentillData.herbs[z].Marrentill[0].Name,
            marrentillIcon: this.iconUrl + '249'

          }
          console.log(marrentillHerbs);
          this.herbs.push(guamHerbs);
      
         }
      

      
    
   
  }

  submitForm(form) {
    const user = this.username
    
   if (user === undefined || user.length === 0 || user.length > 12) {
     alert("error with name");
   } else {
     this.playerLookupService.getOnePlayer(user)
     .toPromise()
     .then((result) => {
       this.playerStats.push(result); 
       this.checkPlayerLevel();
       })
     .catch((err) => {
      console.log(err);
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


