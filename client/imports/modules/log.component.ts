import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import {LoginComponent} from '../pages/login.component';
import { Session } from 'meteor/session';

@Component({
  selector: 'log',
  template: ''  
})
export class log {

  constructor(
    public navCtrl: NavController    
  ) {}

  public InitLoginSession(): void {            
    //console.log(pages);
    if (Meteor.user()) {
        Session.set('loggedIn', 1);
    } else {
        Session.set('loggedIn', 0);
    }       
  }

  InitServerSession() {
    if (Meteor.status().status === "connected") {
        Session.set('connected', 1);
    }
    else if (Meteor.status().status === "connecting") {
        //console.log("reconnecting");
        Session.set('connected', 2);
    }
    else {
        //console.log("disconnected");
        Session.set('connected', 3);
    }
  }

  checkLoginSession() {

  }

  ngOnInit() {
    
  }

}