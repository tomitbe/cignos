import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import template from './home.component.html';
import {LoginComponent} from '../login.component';
import {loging} from '../../services/loging.service';
import { navComponent } from "./nav.component";

@Component({
  selector: 'home',
  template
})
export class homeComponent implements OnInit {
  navi: any;
  constructor(    
      public navCtrl: NavController,
      private log: loging,
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
 

  private watchLogin(): void { 
     
  }

}