import { Component, OnInit } from '@angular/core';
import {DataServiceService } from '../../services/data-service.service';
import {Employee} from '../interfaces/Employee';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  pushUser = {};
  alluser: any[];
  constructor(public  dataService: DataServiceService) {
    this.dataService.getUser().subscribe(alluser => {
      this.alluser = alluser;
    });
  }

  ngOnInit() {
  }
  submit({value, valid}) {


        this.pushUser = value;

         this.dataService.postUser(this.pushUser).subscribe(alluser => {
          this.alluser.push(this.pushUser);
        });

        this.dataService.getUser().subscribe(alluser => {
          this.alluser = alluser;
        });


  }
}
