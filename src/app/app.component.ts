import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /** Array enthält für jeden Menü-Eintrag ein Objekt mit den keys `titel` und `ziel`. */
  public menueEintraegeArray = [
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
