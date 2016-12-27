import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Meteor } from "meteor/meteor";
import { MeteorObservable } from 'meteor-rxjs';
import { AppModule } from './imports/app/app.module';
import { LoggedInComponent } from './imports/pages/loggedin/loggedin.component';
enableProdMode();

Meteor.startup(() => {
    
    const sub2 = MeteorObservable.autorun().subscribe(() => {
        //Todo: does thix also uses gps track?
        //Session.set('pos',Geolocation.latLng());
        console.log('in check log');
        if (Meteor.user()) {
            Session.set('logged',1);
        } else {
            Session.set('logged',0);
        }
        if (Meteor.status().status === "connected") {
            Session.set('connected', 1);
        }
        else if (Meteor.status().status === "connecting") {
            //console.log("reconnecting");
            Session.set('connected', 2);
        }
        else {
            //console.log("disconnected");
            Session.set('connected', 3);
        }
    })
    const sub = MeteorObservable.autorun().subscribe(() => {
        if (Meteor.loggingIn()) return;
        
        setTimeout(() => {
            sub.unsubscribe();
        });

        platformBrowserDynamic().bootstrapModule(AppModule);
    });
});
