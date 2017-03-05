 
 import {   ViewChild, ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core';
 import { Person } from '../person';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Pipe({
 name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(data: Person[], searchTerm: string): Person[] {
      searchTerm = searchTerm.toUpperCase();
      return data.filter((item)=>(item.fName+' '+item.lName).toUpperCase().indexOf(searchTerm)!=-1);
  }

}