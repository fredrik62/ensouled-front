import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensouled-prayer-calculator',
  templateUrl: './ensouled-prayer-calculator.component.html',
  styleUrls: ['./ensouled-prayer-calculator.component.css']
})
export class EnsouledPrayerCalculatorComponent implements OnInit {
heads: any = [];
totalExperience: any;
iconUrl: String;

  constructor() { }

  ngOnInit() {

    this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1528713058107_obj_sprite.gif?id='; 
    const ensouledData = {
      "info":[
          {"Name":"Goblin Head", "Xp": 130, "Level": 3, "id": "13448", "Runes":[{"Nature": 1, "Body": 2}]}, 
          {"Name":"Monkey Head", "Xp": 182, "Level": 7, "id": "13451", "Runes":[{"Nature": 2, "Body": 3}]},
          {"Name":"Imp Head", "Xp": 286, "Level": 12, "id": "13454", "Runes":[{"Nature": 2, "Body": 3}]},
          {"Name":"Minotaur Head", "Xp": 364, "Level": 16, "id": "13457", "Runes":[{"Nature": 2, "Body": 4}]},

          {"Name":"Scorpion Head", "Xp": 454, "Level": 19, "id": "13460", "Runes":[{"Nature": 1, "Soul": 1}]},
          {"Name":"Bear Head", "Xp": 480, "Level": 21, "id": "13463", "Runes":[{"Nature": 1, "Body": 1, "Soul": 1}]},
          {"Name":"Unicorn Head", "Xp": 494, "Level": 22, "id": "13466", "Runes":[{"Nature": 1, "Body": 2, "Soul": 1}]},
          {"Name":"Dog Head", "Xp": 520, "Level": 26, "id": "13469", "Runes":[{"Nature": 1, "Body": 2, "Soul": 2}]},

          {"Name":"Chaos Head", "Xp": 584, "Level": 30, "id": "13472", "Runes":[{"Nature": 1, "Body": 3, "Soul": 2}]},
          {"Name":"Giant Head", "Xp": 650, "Level": 37, "id": "13475", "Runes":[{"Nature": 1, "Body": 4, "Soul": 2}]},
          {"Name":"Ogre Head", "Xp": 716, "Level": 40, "id": "13478", "Runes":[{"Nature": 1, "Body": 4, "Soul": 3}]},
          {"Name":"Elf Head", "Xp": 754, "Level": 43, "id": "13481", "Runes":[{"Nature": 2, "Body": 2, "Soul": 2}]},

          {"Name":"Troll Head", "Xp": 780, "Level": 46, "id": "13484", "Runes":[{"Nature": 2, "Body": 3, "Soul": 2}]},
          {"Name":"Horror Head", "Xp": 832, "Level": 52, "id": "13487", "Runes":[{"Nature": 2, "Body": 4, "Soul": 2}]},
          {"Name":"Kalphite Head", "Xp": 884, "Level": 57, "id": "13490", "Runes":[{"Nature": 2, "Body": 4, "Soul": 3}]},
          {"Name":"Dagannoth Head", "Xp": 936, "Level": 62, "id": "13493", "Runes":[{"Nature": 3, "Body": 4, "Soul": 3}]},

          {"Name":"Bloodveld Head", "Xp": 1040, "Level": 65, "id": "13496", "Runes":[{"Nature": 1, "Soul": 1, "Blood": 1}]},
          {"Name":"Tzhaar Head", "Xp": 1104, "Level": 69, "id": "13499", "Runes":[{"Nature": 3, "Soul": 2, "Blood": 1}]},
          {"Name":"Demon Head", "Xp": 1170, "Level": 72, "id": "13502", "Runes":[{"Nature": 4, "Soul": 2, "Blood": 1}]},
          {"Name":"Aviansie Head", "Xp": 1234, "Level": 78, "id": "13505", "Runes":[{"Nature": 4, "Soul": 3, "Blood": 1}]},

          {"Name":"Abbysal Head", "Xp": 1300, "Level": 85, "id": "13508", "Runes":[{"Nature": 4, "Soul": 4, "Blood": 1}]},
          {"Name":"Dragon Head", "Xp": 1560, "Level": 93, "id": "13511", "Runes":[{"Nature": 4, "Soul": 4, "Blood": 2}]},
      ]
      }
      console.log(ensouledData);
      for (var x = 0; x < ensouledData.info.length; x++ ) {

        let skillDetails = {
          itemName: ensouledData.info[x].Name,
          experience: ensouledData.info[x].Xp,
          levelRequired: ensouledData.info[x].Level,
          itemIdIcon: this.iconUrl + ensouledData.info[x].id,
        }
         this.heads.push(skillDetails);
  
       }
  
}




calculate() {

  console.log(this.totalExperience);
}

}
