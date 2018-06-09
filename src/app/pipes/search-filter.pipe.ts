import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(geItemArray: any, searchTerm: any): any {
    //check if search term is undefined

    if (searchTerm === undefined) {

      return geItemArray;
    }
    
    return geItemArray.filter(function(geData){
      return geData.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
