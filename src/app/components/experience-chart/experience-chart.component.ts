import { Component, OnInit, Input, Output } from '@angular/core';
import { PlayerLookupService } from '../../services/player-lookup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetPlayersService } from '../../services/get-players.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-experience-chart',
  templateUrl: './experience-chart.component.html',
  styleUrls: ['./experience-chart.component.css']
})
export class ExperienceChartComponent implements OnInit {
  chart: any = [];
  total: any = [];
  skill: any = [];
  updated: any = [];
  binding: any = [];
  error: string;
  Attack: String = 'Attack';
  Defence: String = 'Defence';
  Strength: String = 'Strength';
  Hitpoints: String = 'Hitpoints';
  Ranged: String = 'Ranged';
  Prayer: String = 'Prayer';
  Magic: String = 'Magic';
  Cooking: String = 'Cooking';
  Woodcutting: String = 'Woodcutting';
  Fletching: String = 'Fletching';
  Fishing: String = 'Fishing';
  Firemaking: String = 'Firemaking';
  Crafting: String = 'Crafting';
  Smithing: String = 'Smithing';
  Mining: String = 'Mining';
  Herblore: String = 'Herblore';
  Agility: String = 'Agility';
  Thieving: String = 'Thieving';
  Slayer: String = 'Slayer';
  Farming: String = 'Farming';  
  Runecraft: String = 'Runecraft';
  Hunter: String = 'Hunter';  
  Construction: String = 'Construction';


  skillAttack: any = [];
  skillDefence: any = [];
  skillStrength: any = [];
  skillHitpoints: any = [];
  skillRanged: any = [];
  skillPrayer: any = [];
  skillMagic: any = [];
  skillCooking: any = [];
  skillWoodcutting: any = [];
  skillFletching: any = [];
  skillFishing: any = [];
  skillFiremaking: any = [];
  skillCrafting: any = [];
  skillSmithing: any = [];
  skillMining: any = [];
  skillHerblore: any = [];
  skillAgility: any = [];
  skillThieving: any = [];
  skillSlayer: any = [];
  skillFarming: any = [];
  skillRunecraft: any = [];
  skillHunter: any = [];
  skillConstruction: any = [];

  skillBadges = ['Attack_icon.png', 'Defence_icon.png', 'Strength_icon.png','Hitpoints_icon.png', 'Ranged_icon.png','Prayer_icon.png', 'Magic_icon.png', 'Cooking_icon.png'
,'Woodcutting_icon.png', 'Fletching_icon.png', 'Fishing_icon.png', 'Firemaking_icon.png', 'Crafting_icon.png'
,'Smithing_icon.png', 'Mining_icon.png', 'Herblore_icon.png', 'Agility_icon.png', 'Thieving_icon.png', 'Slayer_icon.png'
,'Farming_icon.png', 'Runecrafting_icon.png', 'Hunter_icon.png', 'Construction_icon.png'];
 
  constructor(private activatedRoute: ActivatedRoute, private playerLookupService: PlayerLookupService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      const username = get.player;
         this.playerLookupService.getOnePlayer(username)
        .toPromise()
        .then((data) => {
        const graph = data;
        console.log(graph);
        

        Object.keys(graph).map(key => {
          const experience = graph[key].totalExperience;
          const player = graph[key].updatedAt;
          const event = new Date(player);
          this.total.push(experience);
          this.updated.push(event.toString());

          const xp = {
            Attack: graph[key].Attack.xp,
            Defence: graph[key].Defence.xp,
            Strength: graph[key].Strength.xp,
            Hitpoints: graph[key].Hitpoints.xp,
            Ranged: graph[key].Ranged.xp,
            Prayer: graph[key].Prayer.xp,
            Magic: graph[key].Magic.xp,
            Cooking: graph[key].Cooking.xp,
            Woodcutting: graph[key].Woodcutting.xp,
            Fletching: graph[key].Fletching.xp,
            Fishing: graph[key].Fishing.xp,
            Firemaking: graph[key].Firemaking.xp,
            Crafting: graph[key].Crafting.xp,
            Smithing: graph[key].Smithing.xp,
            Mining: graph[key].Mining.xp,
            Herblore: graph[key].Herblore.xp,
            Agility: graph[key].Agility.xp,
            Thieving: graph[key].Thieving.xp,
            Slayer: graph[key].Slayer.xp,
            Farming: graph[key].Farming.xp,
            Runecraft: graph[key].Runecrafting.xp,
            Hunter: graph[key].Hunter.xp,
            Construction: graph[key].Construction.xp,
          }
          
          this.skillAttack.push(xp.Attack);
          this.skillDefence.push(xp.Defence);
          this.skillStrength.push(xp.Strength);
          this.skillHitpoints.push(xp.Hitpoints);
          this.skillRanged.push(xp.Ranged);
          this.skillPrayer.push(xp.Prayer);
          this.skillMagic.push(xp.Magic);
          this.skillCooking.push(xp.Cooking);
          this.skillWoodcutting.push(xp.Woodcutting);
          this.skillFletching.push(xp.Fletching);
          this.skillFishing.push(xp.Fishing);
          this.skillFiremaking.push(xp.Firemaking);
          this.skillCrafting.push(xp.Crafting);
          this.skillSmithing.push(xp.Smithing);
          this.skillMining.push(xp.Mining);
          this.skillHerblore.push(xp.Herblore);
          this.skillAgility.push(xp.Agility);
          this.skillThieving.push(xp.Thieving);
          this.skillSlayer.push(xp.Slayer);
          this.skillFarming.push(xp.Farming);
          this.skillRunecraft.push(xp.Runecraft);
          this.skillHunter.push(xp.Hunter);
          this.skillConstruction(xp.Construction);
          
      });


const skill = {
  "badges": [
{"binding": this.Attack},
{"binding": this.Defence},
{"binding": this.Strength},
{"binding": this.Hitpoints},
{"binding": this.Ranged},
{"binding": this.Prayer},
{"binding": this.Magic},
{"binding": this.Cooking},
{"binding": this.Woodcutting},
{"binding": this.Fletching},
{"binding": this.Fishing},
{"binding": this.Firemaking},
{"binding": this.Crafting},
{"binding": this.Smithing},
{"binding": this.Mining},
{"binding": this.Herblore},
{"binding": this.Agility},
{"binding": this.Thieving},
{"binding": this.Slayer},
{"binding": this.Farming},
{"binding": this.Runecraft},
{"binding": this.Hunter},
{"binding": this.Construction},
  ]
};

for (let i = 0; i < skill.badges.length; i++) {
  this.binding.push(skill.badges[i].binding);
}
     })
        .catch((err) => {
          if (err) {
            if (err.status === 500) {
              this.router.navigate(['500-server-error']);
            } else if (err.status === 404) {
              this.router.navigate(['404']);
            } else {
              this.error = err.error.code;
            }
          }
        });

    })
  }

  
  
  
      checkSkill (skill) {
        switch (skill) {
            case "Attack":
                this.graph("Attack");
                break;
            case "Defence":
                this.graph("Defence");
                break;
            case "Strength":
                this.graph("Strength");
                break;
            case "Hitpoints":
                this.graph("Hitpoints");
                break;
            case "Ranged":
                this.graph("Ranged");
                break;
            case "Prayer":
                this.graph("Prayer");
                break;
            case "Magic":
                this.graph("Magic");
                break;
            case "Cooking":
                this.graph("Cooking");
                break;
            case "Woodcutting":
                this.graph("Woodcutting");
                break;
            case "Fletching":
                this.graph("Fletching");
                break;
            case "Fishing":
                this.graph("Fishing");
                break;
            case "Firemaking":
                this.graph("Firemaking");
                break;
            case "Crafting":
                this.graph("Crafting");
                break;
            case "Smithing":
                this.graph("Smithing");
                break;
            case "Mining":
                this.graph("Mining");
                break;
            case "Herblore":
                this.graph("Herblore");
                break;
            case "Agility":
                this.graph("Agility");
                break;
            case "Thieving":
                this.graph("Thieving");
                break;
            case "Slayer":
                this.graph("Slayer");
                break;
            case "Farming":
                this.graph("Farming");
                break;
            case "Runecraft":
                this.graph("Runecraft");
                break;
            case "Hunter":
                this.graph("Hunter");
                break;
            case "Construction":
                this.graph("Construction");
                break;
         
           }
          }
          
          graph(skill) {
          console.log(skill);


     this.chart = new Chart('myChart', {
      type: 'line',
      data: {
          labels: this.updated,
          datasets: [{
                  data: this.total,
                  borderColor: '#32CD32',
                  fill: false,
              },
              
          ]
      },
      options: {
          legend: {
            display: false
          },
          
          scales: {
              xAxes: [{
                  
                  display: false
                  
              }],
              yAxes: [{
                ticks: {
                  fontSize: 14,
                  fontColor: '#32CD32'
              },
                  display: true
              }]
          }
      } 
    })
         }
   
        

}  
