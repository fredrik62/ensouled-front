import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GrandExchangeService } from '../../services/grand-exchange.service';
import { Router } from '@angular/router';

import { SearchFilterPipe } from '../../pipes/search-filter.pipe'

@Component({
  selector: 'app-grandexchange-item',
  templateUrl: './grandexchange-item.component.html',
  styleUrls: ['./grandexchange-item.component.css'],

})

export class GrandexchangeItemComponent implements OnInit {

  data: any = [];
  geItemArray = [];
  geData: any;
  p: number = 1;
  image: String;
  iconUrl:String;

  
  constructor(private grandExchangeService: GrandExchangeService, private router: Router) {}

  ngOnInit() {
      this.grandExchangeService.getAllItems()
      .toPromise()
      .then((res) => {
      this.data = res;
      this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1528713058107_obj_sprite.gif?id=';      
              
            
      Object.keys(this.data).forEach(key => {
      this.geData = {

      id: this.data[key].id,
      name: this.data[key].name,
      buyAverage: this.data[key].buy_average,
      sellAverage: this.data[key].sell_average,
      overAllAverage: this.data[key].overall_average,
      storePrice: this.data[key].sp,
      image: this.iconUrl + this.data[key].id
                                
        }
    
      this.geItemArray.push(this.geData);
          
                    
    });
                    
  })
}


       //page navigation to the item clicked on  
  displayItemData(id) {
    this.router.navigate(['grandexchange-2007-osrs', id]);
  }
}