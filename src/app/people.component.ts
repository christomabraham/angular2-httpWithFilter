import { Component,  ViewChild, ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core';

import { Person } from './person';
import { PeopleService } from './people.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
   @ViewChild('input')
   input: ElementRef;
  members: Person[]=[];
  constructor(private peopleService: PeopleService) { 
   // var person:Person=new Person(123,'sd','er','r',34);
   // this.members.push(person);
   }

  ngOnInit() :void {
    this.peopleService
      .getPersons()
      .then(peoples=>this.members=peoples);
       let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup');
       eventObservable.subscribe();
  }

  public setMembers(persons:Person[]):void{
    this.members=persons;
  }

}




