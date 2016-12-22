import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Accounts } from 'meteor/accounts-base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { InjectUser } from "angular2-meteor-accounts-ui";
import template from './login.component.html';
import style from "./login.component.scss";
 
@Component({
  selector: 'login',
  template,
  styles: [
    style
  ]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
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
    //console.log("in handle login " + this.username + " + " + this.password);
    MeteorObservable.call('loginUser', this.username, this.password).subscribe(() => {
      alert('User successfully logged In.');
    }, (error) => {
        alert(`Failed to login due to ${error}`);
    });
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