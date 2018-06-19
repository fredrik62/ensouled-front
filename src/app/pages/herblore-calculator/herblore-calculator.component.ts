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
    const herbloreData = {
        "herbs": [
         
          
                {"Guam":[{"Name":"Attack Potion", "Xp": 25, "Level": 3, "binding": this.attackPotion, "id": "121"}]}, 
                {"Guam":[{"Name":"Guam Tar", "Xp": 30, "Level": 3, "binding": this.guamTar, "id": "10142"}]},
                // {"Marrentill":[{"Name":"Anti Potion", "Xp": 37.5, "Level": 5, "binding": this.antiPotion, "id": "175"}]}, 
                // {"Marrentill":[{"Name":"Marrentill Tar", "Xp": 42.5, "Level": 31, "binding": this.marrentillTar, "id": "10143"}]},
              
        ]    
               
        }


         for (let z = 0; z < herbloreData.herbs.length; z++) {

          const guamHerbs = {
            name: herbloreData.herbs[z].Guam[0].Name,
            guamIcon: this.iconUrl + '249',
            potionIcon: this.iconUrl + herbloreData.herbs[z].Guam[0].id
            
          }
          // console.log(herbloreData.herbs[z].Guam[0].Name);

          // const marrentillHerbs = {
          //   name: herbloreData.herbs[z].Marrentill[0].Name
          // }
          this.herbs.push(guamHerbs);
          console.log(this.herbs);
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

 }


 //todo

 /*
 
 find runescape level table and compare xp to current level + check how much their xp will get closer to next lvl
 
 
 
 
 */