import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicApp, IonicModule } from "ionic-angular";
import {LoginComponent} from '../pages/login.component';
import {homeComponent} from '../pages/home/home.component';
import {loging} from '../services/loging.service';
import { navComponent } from "../pages/home/nav.component";
import { nfcComponent } from "../pages/nfc/nfc.component";


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    homeComponent,
    navComponent,
    nfcComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    LoginComponent,
    homeComponent,
    navComponent,
    nfcComponent      
  ],
  // Providers
  providers: [
    loging
  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent)  
  ],  
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
