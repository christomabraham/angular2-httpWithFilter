import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PeopleService{
    constructor(private http:Http){}

    private headers = new Headers({'Content-Type': 'application/json'});
    private peopleUrl = 'api/members';  // URL to web api

    getPersons(): Promise<Person[]>{
        return this.http.get(this.peopleUrl)
            .toPromise()
            .then(response=>response.json().data as Person[])
            .catch(this.errorHandler)
    }
  /* searchPersons(term:string):Observable<Person[]>{
        return this.http
        .get(`app/heroes/?fNname=${term}`)
        .map(resp=>resp.json().data as Person[])
        .
    }*/
    errorHandler(error:any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
