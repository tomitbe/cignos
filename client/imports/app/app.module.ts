import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicApp, IonicModule } from "ionic-angular";
import {LoginComponent} from '../pages/login.component';
import {homeComponent} from '../pages/home/home.component';
import {LoggedInComponent} from '../pages/loggedin/loggedin.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    homeComponent,
    LoggedInComponent   
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    LoginComponent,
    homeComponent,
    LoggedInComponent       
  ],
  // Providers
  providers: [
        
  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
