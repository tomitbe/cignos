import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicApp, IonicModule } from "ionic-angular";
import {LoginComponent} from '../pages/login.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    LoginComponent
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
