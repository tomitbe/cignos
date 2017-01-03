import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from "ionic-angular";
import {LoginComponent} from '../pages/login.component';
import {homeComponent} from '../pages/home/home.component';
import {myHeader} from '../pages/includes/my-header.component';
import {myBaseFooter} from '../pages/includes/my-base-footer.component';
import {loging} from '../services/loging.service';
import { navComponent } from "../pages/home/nav.component";
import { nfcComponent } from "../pages/nfc/nfc.component";
import { TranslateModule } from 'ng2-translate';
/*
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './i18n', '.json');
}
*/
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    homeComponent,
    navComponent,
    nfcComponent,
    myHeader,
    myBaseFooter
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
    IonicModule.forRoot(AppComponent),
    HttpModule,
    TranslateModule.forRoot()  
  ],  
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
