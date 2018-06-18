import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herblore-calculator',
  templateUrl: './herblore-calculator.component.html',
  styleUrls: ['./herblore-calculator.component.css']
})
export class HerbloreCalculatorComponent implements OnInit {
iconUrl: String;
herbs: any = [];

//guam herbs
attackPotion: Number;
guamTar: Number;
  constructor() { }

  ngOnInit() {


    this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1528713058107_obj_sprite.gif?id='; 
    const herbloreData = {
        "herbs": [
         
          
                {"Guam":[{"Name":"Attack Potion", "Xp": 25, "Level": 3, "binding": this.attackPotion, "id": "249"}]}, 
                {"Guam":[{"Name":"Guam Tar", "Xp": 30, "Level": 3, "binding": this.guamTar, "id": "10142"}]} 
            
              ]
        }


         for (let z = 0; z < herbloreData.herbs.length; z++) {

          const herbs = {
            name: herbloreData.herbs[z].Guam[0].Name,
            guamIcon: this.iconUrl + '249'
          }
          // console.log(herbloreData.herbs[z].Guam[0].Name);
          this.herbs.push(herbs);
          console.log(this.herbs);
         }
      

      
    
   
  }

}
