import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import template from './home.component.html';
import {LoginComponent} from '../login.component';
import {LoggedInComponent} from '../loggedin/loggedin.component';

@Component({
  selector: 'home',
  template  
})
export class homeComponent {

  constructor(
    public navCtrl: NavController    
  ) {}

  ngOnInit() {     
      this.watchLogin();
  }

  navigateToLoggedIn() {
    this.navCtrl.push(LoggedInComponent,{});
  }

  private watchLogin(): void { 
    if (!Meteor.user()) {
        this.navCtrl.push(LoginComponent,{});
    }  
  }

}