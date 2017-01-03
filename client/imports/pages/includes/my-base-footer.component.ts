import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-base-footer',
  template: `
  <ion-footer>
    <ion-toolbar color="cignos">
        <ion-title>{{ 'NAME' | translate }}</ion-title>
    </ion-toolbar>
  </ion-footer>
  `
})
export class myBaseFooter {
 
}
