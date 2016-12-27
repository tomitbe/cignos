import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import template from './loggedin.component.html';
import {LoginComponent} from '../login.component';

@Component({
  selector: 'loggedincomp',
  template  
})
export class LoggedInComponent implements OnInit  {

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