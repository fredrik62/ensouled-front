import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ensouled-prayer-calculator',
  templateUrl: './ensouled-prayer-calculator.component.html',
  styleUrls: ['./ensouled-prayer-calculator.component.css']
})
export class EnsouledPrayerCalculatorComponent implements OnInit {
heads: any = [];
totalExperience: Number;
iconUrl: String;
skillDetails: any;
hideRune: boolean = false;

goblinHead:Number;
monkeyHead:Number;
impHead:Number;
minotaurHead:Number;
scorpionHead:Number;
bearHead:Number;
unicornHead:Number;
dogHead:Number;
chaosHead:Number;
giantHead:Number;
ogreHead:Number;
elfHead:Number;
trollHead:Number;
horrorHead:Number;
kalphiteHead:Number;
dagannothHead:Number;
bloodveldHead:Number;
tzhaarHead:Number;
demonHead:Number;
aviansieHead:Number;
abbysalHead:Number;
dragonHead:Number;
value;

message:any;
  constructor() { }

  ngOnInit() {



    this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1528713058107_obj_sprite.gif?id='; 
    const ensouledData = {
      "info":[
          {"Name":"Goblin Head", "Xp": 130, "Level": 3, "binding": this.goblinHead, "id": "13448", "Runes":[{"Nature": 1, "Body": 2, "Blood": 0, "Soul": 0}]}, 
          {"Name":"Monkey Head", "Xp": 182, "Level": 7, "binding": this.monkeyHead,"id": "13451", "Runes":[{"Nature": 2, "Body": 3, "Blood": 0, "Soul": 0}]},
          {"Name":"Imp Head", "Xp": 286, "Level": 12, "binding": this.impHead, "id": "13454", "Runes":[{"Nature": 2, "Body": 3, "Blood": 0, "Soul": 0}]},
          {"Name":"Minotaur Head", "Xp": 364, "Level": 16, "binding": this.minotaurHead, "id": "13457", "Runes":[{"Nature": 2, "Body": 4, "Blood": 0, "Soul": 0}]},

          {"Name":"Scorpion Head", "Xp": 454, "Level": 19, "binding": this.scorpionHead, "id": "13460", "Runes":[{"Nature": 1, "Soul": 1, "Blood": 0, "Body": 0}]},
          {"Name":"Bear Head", "Xp": 480, "Level": 21, "binding": this.bearHead, "id": "13463", "Runes":[{"Nature": 1, "Body": 1, "Soul": 1, "Blood": 0}]},
          {"Name":"Unicorn Head", "Xp": 494, "Level": 22, "binding": this.unicornHead,"id": "13466", "Runes":[{"Nature": 1, "Body": 2, "Soul": 1,"Blood": 0}]},
          {"Name":"Dog Head", "Xp": 520, "Level": 26, "binding": this.dogHead,"id": "13469", "Runes":[{"Nature": 1, "Body": 2, "Soul": 2, "Blood": 0}]},

          {"Name":"Chaos Head", "Xp": 584, "Level": 30, "binding": this.chaosHead, "id": "13472", "Runes":[{"Nature": 1, "Body": 3, "Soul": 2, "Blood": 0}]},
          {"Name":"Giant Head", "Xp": 650, "Level": 37, "binding": this.giantHead, "id": "13475", "Runes":[{"Nature": 1, "Body": 4, "Soul": 2, "Blood": 0}]},
          {"Name":"Ogre Head", "Xp": 716, "Level": 40, "binding": this.ogreHead, "id": "13478", "Runes":[{"Nature": 1, "Body": 4, "Soul": 3, "Blood": 0}]},
          {"Name":"Elf Head", "Xp": 754, "Level": 43, "binding": this.elfHead, "id": "13481", "Runes":[{"Nature": 2, "Body": 2, "Soul": 2, "Blood": 0}]},

          {"Name":"Troll Head", "Xp": 780, "Level": 46, "binding": this.trollHead, "id": "13484", "Runes":[{"Nature": 2, "Body": 3, "Soul": 2, "Blood": 0}]},
          {"Name":"Horror Head", "Xp": 832, "Level": 52, "binding": this.horrorHead, "id": "13487", "Runes":[{"Nature": 2, "Body": 4, "Soul": 2, "Blood": 0}]},
          {"Name":"Kalphite Head", "Xp": 884, "Level": 57, "binding": this.kalphiteHead, "id": "13490", "Runes":[{"Nature": 2, "Body": 4, "Soul": 3, "Blood": 0}]},
          {"Name":"Dagannoth Head", "Xp": 936, "Level": 62, "binding": this.dagannothHead, "id": "13493", "Runes":[{"Nature": 3, "Body": 4, "Soul": 3, "Blood": 0}]},

          {"Name":"Bloodveld Head", "Xp": 1040, "Level": 65, "binding": this.bloodveldHead, "id": "13496", "Runes":[{"Nature": 1, "Soul": 1, "Blood": 1, "Body": 0}]},
          {"Name":"Tzhaar Head", "Xp": 1104, "Level": 69, "binding": this.tzhaarHead, "id": "13499", "Runes":[{"Nature": 3, "Soul": 2, "Blood": 1, "Body": 0}]},
          {"Name":"Demon Head", "Xp": 1170, "Level": 72, "binding": this.demonHead, "id": "13502", "Runes":[{"Nature": 4, "Soul": 2, "Blood": 1, "Body": 0}]},
          {"Name":"Aviansie Head", "Xp": 1234, "Level": 78, "binding": this.aviansieHead,"id": "13505", "Runes":[{"Nature": 4, "Soul": 3, "Blood": 1, "Body": 0}]},

          {"Name":"Abbysal Head", "Xp": 1300, "Level": 85, "binding": this.abbysalHead, "id": "13508", "Runes":[{"Nature": 4, "Soul": 4, "Blood": 1, "Body": 0}]},
          {"Name":"Dragon Head", "Xp": 1560, "Level": 93, "binding": this.dragonHead, "id": "13511", "Runes":[{"Nature": 4, "Soul": 4, "Blood": 2, "Body": 0}]},
      ]
      };

      for (let x = 0; x < ensouledData.info.length; x++ ) {

        this.skillDetails = {
          itemName: ensouledData.info[x].Name,
          ngModel: ensouledData.info[x].binding,
          experience: ensouledData.info[x].Xp,
          levelRequired: ensouledData.info[x].Level,
          itemIdIcon: this.iconUrl + ensouledData.info[x].id,
          natureRune: ensouledData.info[x].Runes[0].Nature,
          bodyRune: ensouledData.info[x].Runes[0].Body,
          soulRune: ensouledData.info[x].Runes[0].Soul,
          bloodRune: ensouledData.info[x].Runes[0].Blood
        }
        this.heads.push(this.skillDetails);
        
  
      }
    }
    
    
    
    
    calculate() {
    for(var x = 0; x < this.heads.length; x++) {
      var totalInputs = this.heads[x].binding || 0;
      var sum = totalInputs * this.heads[x].experience;
      console.log(sum);
    }
     
}

}
