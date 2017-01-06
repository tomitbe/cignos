import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import template from './nav.component.html';
import {LoginComponent} from '../login.component';
import { homeComponent } from "./home.component";


@Component({
  selector: 'navComponent',
  template,
  providers: [navComponent]
})
export class navComponent implements OnInit {
  rootyPage: any = homeComponent;  
  constructor(    
    public navCtrl: NavController    
  ) {}

  ngOnInit() {     
      if (!Meteor.user()) {
        this.navCtrl.push(LoginComponent,{});
      }               
      this.rootyPage = homeComponent;
  }

  logOut() {
    Meteor.logout(() => {
      this.navCtrl.setRoot(LoginComponent,{});
    });
    
  }
 

  private watchLogin(): void { 
     
  }

}