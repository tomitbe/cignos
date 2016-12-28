import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import template from './home.component.html';
import {LoginComponent} from '../login.component';
import {loging} from '../../services/loging.service';

@Component({
  selector: 'home',
  template
})
export class homeComponent implements OnInit {
  constructor(    
    public navCtrl: NavController,
    private log: loging       
  ) {}

  ngOnInit() {     
      if (!Meteor.user()) {
        this.navCtrl.push(LoginComponent,{});
      }       
  }

  logOut() {
    Meteor.logout();
    this.navCtrl.setRoot(LoginComponent,{});
  }
 

  private watchLogin(): void { 
     
  }

}