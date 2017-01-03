import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-header',
  template: `
    <ion-header>
        <ion-navbar color="cignos">
            <button ion-button menuToggle>
            <ion-icon name="menu"></ion-icon>
            </button>
            <ion-title>{{ 'TITLE_APP' | translate }}</ion-title>
        </ion-navbar>
    </ion-header>
  `
})
export class myHeader {
 
}
