import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import template from './nfc-code.component.html';
import {LoginComponent} from '../login.component';
import { navComponent } from "../home/nav.component";
import {homeComponent} from '../home/home.component';

@Component({
  selector: 'nfcCodeComponent',
  template
})
export class nfcCodeComponent implements OnInit {
  navi: any; 
  code: number;  
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

    getCode() {
      console.log("got code " + this.code);
    }

    onInputKeypress({keyCode}: KeyboardEvent): void {
      if (keyCode == 13) {
        this.getCode();
      }
    }

}