import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {observable} from 'rxjs/symbol/observable';
import {Employee} from '../interfaces/Employee';

@Component({
  selector: 'app-firecomponent',
  templateUrl: './firecomponent.component.html',
  styleUrls: ['./firecomponent.component.css']
})
export class FirecomponentComponent implements OnInit {
/*
  employess: FirebaseListObservable<any[]>;
  Employee: FirebaseObjectObservable<any>;
*/

  oneemployee: Employee;
  constructor(/*public af: AngularFireDatabase*/) {
/*
    this.employess = this.af.list('employees') as FirebaseListObservable<Employee[]>;

  }

  addEmployee(employee: Employee) {
    return this.employess.push(employee);
  }

  submit({value}) {
    this.addEmployee(value);
*/
  }
  ngOnInit() {
  }

  submit() { }
}
