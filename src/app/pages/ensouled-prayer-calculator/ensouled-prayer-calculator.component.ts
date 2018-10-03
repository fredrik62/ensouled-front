import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ensouled-prayer-calculator',
  templateUrl: './ensouled-prayer-calculator.component.html',
  styleUrls: ['./ensouled-prayer-calculator.component.css']
})
export class EnsouledPrayerCalculatorComponent implements OnInit {
heads: any = [];
bones: any = [];
totalExperience: Number;
iconUrl: String;
skillDetails: any;
boneDetails: any;
showResult: boolean = false;

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

Bones:Number;
Wolfbones:Number;
Burntbones:Number; 
Monkeybones:Number;
Batbones:Number;
Jogrebones:Number;
Bigbones:Number;
Zogrebones:Number;
Shaikahanbones:Number;
Babydragonbones:Number;
Ourgbones:Number;
Wyvernbones:Number;
Dragonbones:Number;
Fayrgbones:Number;
Lavadragonbones:Number;
Raurgbones:Number;
Dagannothbones:Number;
Superiordragonbones:Number;

value:any = [];
total: Number;
totalRunes = [];
bloodRune: Number;
bodyRune: Number;
natureRune: Number;
soulRune: Number;
ensouledIcons: Array<String>;
boneIcons: Array<String>;

  constructor() { }

  ngOnInit() {

this.ensouledIcons = ['Ensouled_goblin_head.png', 'Ensouled_monkey_head.png','Ensouled_imp_head.png',
 'Ensouled_minotaur_head.png', 'Ensouled_scorpion_head.png', 'Ensouled_bear_head.png', 'Ensouled_unicorn_head.png',
 'Ensouled_dog_head.png', 'Ensouled_chaos_druid_head.png','Ensouled_giant_head.png', 'Ensouled_ogre_head.png', 'Ensouled_elf_head.png',
 'Ensouled_troll_head.png', 'Ensouled_horror_head.png', 'Ensouled_kalphite_head.png', 'Ensouled_dagannoth_head.png',
 'Ensouled_bloodveld_head.png', 'Ensouled_tzhaar_head.png', 'Ensouled_demon_head.png', 'Ensouled_aviansie_head.png',
 'Ensouled_abyssal_head.png', 'Ensouled_dragon_head.png' ];

   
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
          natureRune: ensouledData.info[x].Runes[0].Nature,
          bodyRune: ensouledData.info[x].Runes[0].Body,
          soulRune: ensouledData.info[x].Runes[0].Soul,
          bloodRune: ensouledData.info[x].Runes[0].Blood
        }
        this.heads.push(this.skillDetails);
        
  
      }

      this.boneIcons = ['bones.png', 'wolf_bones.png','burnt_bones.png',
      'monkey_bones.png', 'bat_bones.png', 'jogre_bones.png', 'big_bones.png',
      'zogre_bones.png', 'shaikahan_bones.png','babydragon_bones.png', 'ourg_bones.png', 'wyvern_bones.png',
      'dragon_bones.png', 'fayrg_bones.png', 'lava_dragon_bones.png', 'raurg_bones.png',
      'dagannoth_bones.png', 'superior_dragon_bones.png'];

      const boneData = {
        "info":[
          {"Name":"Bones", "Xp": 130, "Level": 1, "binding": this.Bones}, 
          {"Name":"Wolf Bones", "Xp": 182, "Level": 1, "binding": this.Wolfbones},
          {"Name":"Burnt Bones", "Xp": 286, "Level": 1, "binding": this.Burntbones},
          {"Name":"Monkey Bones", "Xp": 364, "Level": 1, "binding": this.Monkeybones},
          {"Name":"Bat Bones", "Xp": 130, "Level": 1, "binding": this.Batbones}, 
          {"Name":"Jogre Bones", "Xp": 182, "Level": 1, "binding": this.Jogrebones},
          {"Name":"Big Bones", "Xp": 286, "Level": 1, "binding": this.Bigbones},
          {"Name":"Zogre Bones", "Xp": 364, "Level": 1, "binding": this.Zogrebones},
          {"Name":"Shaikahan Bones", "Xp": 364, "Level": 1, "binding": this.Shaikahanbones},
          {"Name":"Baby Dragon Bones", "Xp": 130, "Level": 1, "binding": this.Babydragonbones}, 
          {"Name":"Ourg Bones", "Xp": 182, "Level": 1, "binding": this.Ourgbones},
          {"Name":"Wyvern Bones", "Xp": 286, "Level": 1, "binding": this.Wyvernbones},
          {"Name":"Dragon Bones", "Xp": 364, "Level": 1, "binding": this.Dragonbones},
          {"Name":"Fayrg Bones", "Xp": 364, "Level": 1, "binding": this.Fayrgbones},
          {"Name":"Lava Dragon Bones", "Xp": 130, "Level": 1, "binding": this.Lavadragonbones}, 
          {"Name":"Raurg Bones", "Xp": 182, "Level": 1, "binding": this.Raurgbones},
          {"Name":"Dagannoth Bones", "Xp": 286, "Level": 1, "binding": this.Dagannothbones},
          {"Name":"Superior Dragon Bones", "Xp": 364, "Level": 70, "binding": this.Superiordragonbones},


        ]};
        for (let x = 0; x < boneData.info.length; x++ ) {

          this.boneDetails = {
            itemName: boneData.info[x].Name,
            ngModel: boneData.info[x].binding,
            experience: boneData.info[x].Xp,
            levelRequired: boneData.info[x].Level,
          
          }
          this.bones.push(this.boneDetails);
          
    
        }
      
    }
    
    
    
    
    calculate() {
      this.value = [];
      this.total = 0;

      this.bloodRune = 0;
      this.bodyRune = 0;
      this.natureRune = 0;
      this.soulRune = 0;

      for(let x = 0; x < this.heads.length; x++) {
      let allInputs = this.heads[x].binding || 0;
      let sum = this.heads[x].experience * allInputs;

      //runes needed to cast spells
      let nat = this.heads[x].natureRune * allInputs;
      let body = this.heads[x].bodyRune * allInputs;
      let soul = this.heads[x].soulRune * allInputs;
      let blood = this.heads[x].bloodRune * allInputs;
      

      if (sum > 0) {
      let runes = {
        nature: nat,
        body: body,
        soul: soul,
        blood: blood
      }

      this.value.push(sum);
      this.totalRunes.push(runes);
        }
      }

  

    for (var i = 0; i < this.value.length; i++) {
        this.total = this.total + this.value[i];
        // if (this.total === 0) {
        //   alert("Please check your inputs");
        // }
        
        this.natureRune = this.natureRune + this.totalRunes[i].nature;
        this.bodyRune = this.bodyRune + this.totalRunes[i].body;
        this.soulRune = this.soulRune + this.totalRunes[i].soul;
        this.bloodRune = this.bloodRune + this.totalRunes[i].blood;
      
    
        
    }
    
     
}

}
