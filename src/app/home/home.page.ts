import { Component } from '@angular/core';

import { GlobaleKonstanten } from '../globale-konstanten';

/**
 * Für weitere Möglichkeiten mit dem Element `ion-card` siehe:
 * https://www.positronx.io/ionic-card-component-example/
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {

        console.log("Konstante 1: " + GlobaleKonstanten.KONSTANTE_1 );
    }

}
