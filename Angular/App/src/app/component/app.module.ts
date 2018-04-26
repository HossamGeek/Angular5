import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Form*/
import {FormsModule} from '@angular/forms';

/*Routeing*/
import {RouterModule, Routes} from '@angular/router';

/*Service*/
import {DataServiceService} from '../services/data-service.service';
import {HttpModule} from '@angular/http';

/*uploadFile*/
import {FileUploadModule} from 'primeng/fileupload';

/*Bootsrtap*/
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

/*Firebase*/
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

/*component*/

import { AppComponent } from './nav/app.component';
import { FormComponent } from './form/form.component';
import { TestComponent } from './test/test.component';
import { FirecomponentComponent } from './firecomponent/firecomponent.component';


/*router*/
const approutes: Routes = [
  {path: 'test/:id' , component : TestComponent},
  {path: 'add' , component : FormComponent},
  {path: 'fire' , component : FirecomponentComponent },
];


/*configration with firebase */
export const firebaseConfig = {
  apiKey: 'AIzaSyCwZUCfRS_qN6RsJKQX8BoQ_UK-mrXxxSs',
  authDomain: 'socialmedia-e81e4.firebaseapp.com',
  databaseURL: 'https://socialmedia-e81e4.firebaseio.com',
  projectId: 'socialmedia-e81e4',
  storageBucket: 'socialmedia-e81e4.appspot.com',
  messagingSenderId: '708929160873'
};

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TestComponent,
    FirecomponentComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(approutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    DataServiceService,
    AngularFireDatabase,
    AngularFireAuth
  ],
  bootstrap: [
    AppComponent,
    FormComponent,
    TestComponent,
    FirecomponentComponent
  ]
})
export class AppModule { }
