///<reference path="../../../../node_modules/angularfire2/database-deprecated/firebase_list_observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {DataServiceService } from '../../services/data-service.service';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../interfaces/Employee';
import 'rxjs/add/operator/map';

import {FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import {hasKey} from 'angularfire2/database-deprecated/utils';

import {getOverloadKey} from 'tslint/lib/rules/adjacentOverloadSignaturesRule';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  public show = true;
  public errorconc = false;
  public waiting = true;
  public active = 0;
  public edited = false;

  private baseUrl = 'http://www.test.com';
  private isOnline = false;

  employess: AngularFireList<any>;
  allemp: Observable<any[]>;

  userdb: Employee;
  alluser: Employee[];

  /*
  employess1: AngularFireList<any>;
  allempdata: Observable<any[]>;
  item: Observable<Employee[]>;
  */

  users: Employee = {
    key: '',
    user:  '',
    fName: '',
    lName: '',
    email: '',
    password: '',
    job: '',
    photo: '',
    location: '',
    status: 0
};



  constructor(public db: AngularFireDatabase ) {


    this.onlineCheck();

    this.employess =  db.list('/employees') ;

        this.allemp = this.employess.snapshotChanges().map(actions => {

/*          getdata From Firebase         */
          return actions.map(a => {
            const k = a.payload.key.toString();
            const p = a.payload.toJSON();
            return {k, p};
          });

        });

        if (this.allemp == null) {
          console.log('error');
        }
        this.allemp.subscribe(element => { console.log('hello');
          this.show = true;
          this.errorconc = false;
          this.waiting = false;
        });
          this.allemp.forEach(element => {
            this.alluser = element;
            console.log(this.alluser);
          });

        /*
        //Other Way
        this.allempdata = this.employess.valueChanges();
*/

/*          this.allempdata.forEach(element => {
            this.alluser2 = element;
           // console.log(element);
          });*/
  }

  ngOnInit() {
  }



  onlineCheck() {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        // Set online status
        this.isOnline = true;
        this.show = true;
        this.errorconc = false;
        this.waiting = false;

        resolve(true);
        console.log('sucsses conc');
      };
      xhr.onerror = () => {
        // Set online status
        this.isOnline = false;
        this.show = false;
        this.errorconc = true;
        this.waiting = false;

        reject(false);
        console.log('error conc');
      };
      xhr.open('GET', this.baseUrl, true);
      xhr.send();
    });
  }

  submit({value, valid}) {
     /*push data to firebase*/

      this.userdb = value;

      this.employess.push(this.userdb);

      this.users.user =  '';
      this.users.fName = '';
      this.users.lName = '';
      this.users.email = '';
      this.users.password = '';
      this.users.job = '';
      this.users.photo = '';
      this.users.location = '';
      this.users.status = 0;

  }


  delete(value) {
    this.employess.remove(value);
  }

  Edit(k: string, p: Employee) {
    this.show = false;
    this.edited = true;
    console.log(k);
    this.users.key = k;
    this.users.user =  p.user;
    this.users.fName = p.fName;
    this.users.lName = p.lName;
    this.users.email = p.email;
    this.users.password = '';
    this.users.job = p.job;
    this.users.photo = '';
    this.users.location = p.location;
    this.users.status = p.status;
  }


  update({value}, k) {
    this.userdb = value;

    this.employess.update(k, this.userdb );
    this.show = true;
    this.users.user =  '';
    this.users.fName = '';
    this.users.lName = '';
    this.users.email = '';
    this.users.password = '';
    this.users.job = '';
    this.users.photo = '';
    this.users.location = '';
    this.users.status = 0;

  }

  Active(k) {
    console.log(k);
     this.employess.update(k, {status: 1});

  }
  DisActive(k) {

  this.employess.update(k, {status: 0});

}
}
