import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import template from './home.component.html';
import {LoginComponent} from '../login.component';
import { navComponent } from "./nav.component";
import { nfcComponent } from "../nfc/nfc.component";
import { nfcCodeComponent } from "../nfc/nfc-code.component";

@Component({
  selector: 'home',
  template
})
export class homeComponent implements OnInit {
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

  navigateToNfc() {
    this.navCtrl.push(nfcComponent,{});
  }

  navigateToEnterCode() {
    this.navCtrl.push(nfcCodeComponent,{});
  }

  logOut() {
    this.navi.logOut();
  }
 


}