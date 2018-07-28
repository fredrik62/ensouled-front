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

  item: any = [];
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
      this.item = res;
      this.iconUrl = 'https://rsbuddy.com/items/' 
      
            
      Object.keys(this.item[0].data).forEach(key => {
      this.geData = {

      id: this.item[0].data[key].id,
      name: this.item[0].data[key].name,
      buyAverage: this.item[0].data[key].buy_average,
      sellAverage: this.item[0].data[key].sell_average,
      overAllAverage: this.item[0].data[key].overall_average,
      storePrice: this.item[0].data[key].sp,
      image: this.iconUrl + this.item[0].data[key].id + '.png'
                                
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