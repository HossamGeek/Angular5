import { Component, OnInit } from '@angular/core';

import {DataServiceService } from '../../services/data-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  user: any[];
  name: any;
  constructor(private router: Router,
              private route: ActivatedRoute) {
          this.route.params.subscribe((params: Params ) => {
              this.name = params.id;
          });

/*
public  dataService: DataServiceService,
     this.dataService.getUser().subscribe(user => {
       this.user = user;
     });
*/
  }

  ngOnInit() {
  }

}
