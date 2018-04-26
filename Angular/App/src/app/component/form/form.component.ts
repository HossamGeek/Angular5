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

  employess: AngularFireList<any>;
  employess1: AngularFireList<any>;
  allemp: Observable<any[]>;
  allempdata: Observable<any[]>;
  item: Observable<Employee[]>;
  pushUser = {};

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
  userdb: Employee;

  alluser: Employee[];
  alluser2: Employee[];
  constructor(public  dataService: DataServiceService, public db: AngularFireDatabase ) {
    /*this.dataService.getUser().subscribe(alluser => {
      this.alluser = alluser;
    });*/

        this.employess =  db.list('/employees') ;

        this.allemp = this.employess.snapshotChanges().map(actions => {

          return actions.map(a => {
            const k = a.payload.key.toString();
            const p = a.payload.toJSON();
            return {k, p};
          });

        });
          this.allemp.forEach(element => {
            this.alluser = element;
            console.log(this.alluser);
          });

        /*this.allempdata = this.employess.valueChanges();
*/

/*          this.allempdata.forEach(element => {
            this.alluser2 = element;
           // console.log(element);
          });*/
  }

  ngOnInit() {
  }



  submit({value, valid}) {


/* By Api
    this.pushUser = value;
*/
/*

     this.dataService.postUser(this.pushUser).subscribe(alluser => {
      this.alluser.push(this.pushUser);
    });

    this.dataService.getUser().subscribe(alluser => {
      this.alluser = alluser;
    });

*/


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

}
