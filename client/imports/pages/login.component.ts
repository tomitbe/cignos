import { Component,NgZone, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { InjectUser } from "angular2-meteor-accounts-ui";
import template from './login.component.html';
import style from "./login.component.scss";
import { navComponent } from "./home/nav.component";
import {Session} from 'meteor/session';
 
@Component({
  selector: 'login',
  template,
  styles: [
    style
  ]
})
export class LoginComponent {
  username = 'philippe.vandekerckhove';
  password = 'Ikweethetbijna9';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private zone: NgZone
    ) {
      
    }
 
  onInputKeypress({keyCode}: KeyboardEvent): void {
    if (keyCode == 13) {
      this.login();
    }
  }
 
  login(): void {
    this.handleLogin();
  }

  passforgotten(): void {
    console.log('pass forgotten');
  }
 
  private handleLogin(): void {
   // Session.set('nav',this.navCtrl);
    //console.log("in handle login " + this.username + " + " + this.password);
    let resp = MeteorObservable.call('loginUser', this.username, this.password).subscribe(() => {        
      Meteor.loginWithPassword(this.username, this.password, (err) => {
        this.zone.run(() => {
          if (err) {
            alert(`Failed to login on Meteors side`);
          } else {
            this.navCtrl.setRoot(navComponent, {});
          }
        });
      });

      }, (error) => {         
          alert(`Failed to login due to ${error}`);
      });
    
  }

  ngOnInit() {
    //this.loginserv.InitLoginSession();    
    if (Meteor.user()) {
      this.navCtrl.setRoot(navComponent,{});
    }
  }
 
  private handleError(e: Error): void {
    console.error(e);
 
    const alert = this.alertCtrl.create({
      title: 'Oops!',
      message: e.message,
      buttons: ['OK']
    });
 
    alert.present();
  }
}