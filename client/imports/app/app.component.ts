import { Component,OnInit } from '@angular/core';
import { Platform } from "ionic-angular";
import { StatusBar } from "ionic-native";
import { Meteor } from 'meteor/meteor';
import template from './app.component.html';
import { nfcComponent } from "../pages/nfc/nfc.component";
import { navComponent } from "../pages/home/nav.component";
import {TranslateService} from 'ng2-translate';
import {NFC, Ndef} from 'ionic-native';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  rootPage: any;  
  public translatedText: string;
  public supportedLangs: any[];
  
  constructor(platform: Platform,translate: TranslateService) {   
    translate.addLangs(["en"]);
    translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en'); 
    this.rootPage = nfcComponent;        

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.      

      StatusBar.styleDefault();
    });
  }
  

}
