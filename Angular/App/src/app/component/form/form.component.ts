import { Component, OnInit } from '@angular/core';
import {DataServiceService } from '../../services/data-service.service';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../interfaces/Employee';
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
  allemp: Observable<any[]>;
  allempdata: Observable<any[]>;

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
  constructor(public  dataService: DataServiceService, public db: AngularFireDatabase) {
    /*this.dataService.getUser().subscribe(alluser => {
      this.alluser = alluser;
    });*/

        this.employess =  db.list('/employees') ;

        this.allemp = this.employess.snapshotChanges();
        this.allempdata = this.employess.valueChanges();
          this.allemp.forEach(element => {
           this.alluser = element;
          console.log(element);
          });
    this.allempdata.forEach(element => {
      this.alluser2 = element;
      console.log(element);
    });
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
