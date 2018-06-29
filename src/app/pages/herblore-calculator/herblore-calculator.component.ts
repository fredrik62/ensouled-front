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
hh: any;
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

  constructor(private playerLookupService: PlayerLookupService) { }

  ngOnInit() {


    this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1529576970247_obj_sprite.gif?id='; 




    var herb = {
      guam: {
        
        potion: {
        name: "attack potion"
      
      },
      potion1: {
        name: "marrentill-tar"
      }},

       marrentill: {
        
        potion: {
        name: "prayer"
      
      },
      potion1: {
        name: "mar"
      }
      }
        
    
    };
   
    for (var key in herb) {
      for (var key2 in herb[key]) {
       
      this.hh = {
        allHerb: {
          name: key
        },
        // guam: {
        //   name: herb.guam[key2].name
        // },
        // marrentill: {
        //   name: herb.marrentill[key2].name
        // }
      }
      
    }
    this.herbs.push(this.hh);
  }


    
   
  }

  submitForm(form) {
    const user = this.username
    if (user.length > 1 ) {
      this.loading = true;
    }
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


