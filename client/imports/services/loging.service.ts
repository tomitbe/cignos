import { Injectable } from '@angular/core';
import { Meteor } from "meteor/meteor";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class loging {
  
  constructor(){}

  public state(): boolean {      
        if (Meteor.user()) {
            Session.set('logged',1);
           return true;
        } 
        Session.set('logged',0);
        return false;
  }

}
