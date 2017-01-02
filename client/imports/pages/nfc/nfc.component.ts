import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import template from './nfc.component.html';
import {LoginComponent} from '../login.component';
import { navComponent } from "../home/nav.component";
import {NFC, Ndef} from 'ionic-native';


@Component({
  selector: 'nfcscan',
  template
})
export class nfcComponent implements OnInit {
  navi: any;   
  constructor(    
      public navCtrl: NavController,           
      @Inject(forwardRef(() => navComponent)) navi: navComponent
      ) {
        this.navi = navi;        
    }

    ngOnInit() {     
      if (!Meteor.user()) {
        this.navCtrl.push(LoginComponent,{});
      }         

      let message = Ndef.textRecord('Hello world');
      NFC.share([message]).then(this.onSuccess).catch(this.onError);

    }

    onSuccess(obj): void {
      console.log("in");
    }

    onError(obj): void {
      console.log("error " + obj);
    }

    logOut() {
     this.navi.logOut();
    }
 

}