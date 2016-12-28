import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import template from './nfc.component.html';
import {LoginComponent} from '../login.component';
import { navComponent } from "../home/nav.component";



@Component({
  selector: 'nfcscan',
  template
})
export class nfcComponent implements OnInit {
  navi: any;
  constructor(    
      public navCtrl: NavController,           
      @Inject(forwardRef(() => navComponent)) navi: navComponent
      ) {
        this.navi = navi;        
    }

    ngOnInit() {     
      if (!Meteor.user()) {
        this.navCtrl.push(LoginComponent,{});
      }                      
    }

    logOut() {
     this.navi.logOut();
    }
 

}