import { Injectable } from '@angular/core';
import {Http} from '@angular/http' ; 
import 'rxjs/add/operator/map'
@Injectable()
export class CallApiService {

  constructor(private http:Http) { }
 
  CallApi(add){
    return this.http.get('https://swapi.co/api/people/?search='+add)
    .map(result => result.json())
 }

}
