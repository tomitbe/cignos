import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import template from './nfc.component.html';
import {LoginComponent} from '../login.component';
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
      ) {
          

          platform.ready().then(() => {                         
            console.log("in ready state");           
            this.addNfcListeners();
          });

        }


    ngOnInit() {                  
      
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

 
 
    goBack() {
      this.navCtrl.setRoot(homeComponent,{});
    }

    goToEnterCode() {
      this.navCtrl.setRoot(homeComponent,{});
    }

}