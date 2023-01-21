import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, Sname: string): unknown {
    if(Sname==""){
      return value;
    }
    let usersArray: any[] = [];
    for(let i=0 ; i<value.length ; i++){
      if(value[i].startsWith(Sname)){
        usersArray.push(value[i])
      }
    }
    return usersArray;
  }

}
