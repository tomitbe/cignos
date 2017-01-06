import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import template from './nfc.component.html';
import {LoginComponent} from '../login.component';
import { navComponent } from "../home/nav.component";
import {homeComponent} from '../home/home.component';
import {NFC, Ndef} from 'ionic-native';


@Component({
  selector: 'nfcscan',
  template
})
export class nfcComponent implements OnInit {
  navi: any;   
  constructor(
      platform: Platform,
      public navCtrl: NavController,           
      @Inject(forwardRef(() => navComponent)) navi: navComponent
      ) {
          this.navi = navi;        

          platform.ready().then(() => {             
            console.log("in ready state");           
            this.addNfcListeners();
          });

        }


    ngOnInit() {     
      if (!Meteor.user()) {
        this.navCtrl.push(LoginComponent,{});
      }         
      
    }


    addNfcListeners():void {
        NFC.addTagDiscoveredListener('text/plain',(res) => {
          console.log("in success" + res);
        });
        NFC.addNdefListener(() => {
          console.log("in success ndef listener");
        },(fail) => {
          console.log("fail in NDEF listener");
        });
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
 
    goBack() {
      this.navCtrl.setRoot(homeComponent,{});
    }

    goToEnterCode() {
      this.navCtrl.setRoot(homeComponent,{});
    }

}