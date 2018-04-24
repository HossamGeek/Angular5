import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DataServiceService {

//  data: Observable<Array<number>>;
  constructor(public  http: Http) {

  }

  getUser() {

    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');

    const options = new RequestOptions({ headers: headers });

    return this.http.get('http://127.0.0.1:8000/api/employee', options).map(res => res.json());
  }

  postUser(user) {
    return this.http.post('http://127.0.0.1:8000/api/employee', user).map(res => res.json());
  }




}


/*

this.data = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hossam');
  }, 1000);
  setTimeout(() => {
    observer.next( 'Ali');
  }, 3000);
  setTimeout(() => {
    observer.next( 'Mostafa');
  }, 4000);
});
return this.data;*/

