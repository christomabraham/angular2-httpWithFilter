import { Component } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Family Member List';
  members:Person[];

  public setMembers(persons:Person[]):void{

    alert('inside persons members---'+persons.length+'----'+this.members.length);
    this.members=persons;
  }
}
