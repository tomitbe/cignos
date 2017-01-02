import { Component,OnInit } from '@angular/core';
import { Platform } from "ionic-angular";
import { StatusBar } from "ionic-native";
import { Meteor } from 'meteor/meteor';
import template from './app.component.html';
import { LoginComponent } from "../pages/login.component";
import { navComponent } from "../pages/home/nav.component";

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  rootPage: any;  
  public translatedText: string;
  public supportedLangs: any[];
  
  constructor(platform: Platform) {    
    this.rootPage = Meteor.user() ? navComponent : LoginComponent;        
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  

}
