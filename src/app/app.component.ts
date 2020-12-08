import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  /** Array enthält für jeden Menü-Eintrag ein Objekt mit den keys `titel` und `ziel`. */
  private menueEintraegeArray: Array<Object>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.fuelleMenueEintrageArray();
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Füllt Member-Variable `menueEintraegeArray` mit einem
   * Element pro Navigationsziel/Seite.
   */
  private fuelleMenueEintrageArray() {

    this.menueEintraegeArray = [
      {
        titel: "Kärtchen",
        ziel: "/home"
      },
      {
        titel: "RGB-Farbwahl binär",
        ziel: "/seite2"
      },
      {
        titel: "Datenrate Wi-Fi 6",
        ziel: "/seite3"
      }
    ];
  }

}
