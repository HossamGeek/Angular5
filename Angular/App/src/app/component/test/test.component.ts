import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DataServiceService } from '../../services/data-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {

  user: any[];
  name: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.route.params.subscribe((params: Params) => {
      this.name = params.id;
    });
    this.toastr.setRootViewContainerRef(vcr);

  }

/*
public  dataService: DataServiceService,
     this.dataService.getUser().subscribe(user => {
       this.user = user;
     });
*/


  ngOnInit() {
  }

  showSuccess() {

    this.toastr.success('You are awesome!', 'Success!', {toastLife: 50000,  positionClass: 'toast-bottom-right', newestOnTop : true});
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
}
