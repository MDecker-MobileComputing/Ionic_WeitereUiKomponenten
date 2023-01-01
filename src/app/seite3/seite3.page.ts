import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

/**
 * Seite zur Demonstration Verwendung von UI-Komponente `ion-select`.
 *
 * * Tabelle mit Datenraten von 802.11ax:
 *   * https://www.elektronik-kompendium.de/sites/net/2010241.htm
 *   * https://www.computerweekly.com/de/ratgeber/Wi-Fi-6-Was-kann-WLAN-80211ax-besser-als-80211ac
 * * Kodierungsverfahren für 802.11ax (bis zu 1024-QAM):
 *   https://www.electronics-notes.com/articles/connectivity/wifi-ieee-802-11/802-11ax-modulation-coding.php
 *
 * "Im 5-GHz-WLAN-Band unterstützt 802.11ax Kanalbandbreiten von 20, 40, 80 und 160 MHz.
 *  Im schmäleren 2,4-GHz-Band dürfen die Kanäle 20 oder 40 MHz breit sein."
 * (Quelle: computerweekly.com)
 */
@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.page.html',
  styleUrls: ['./seite3.page.scss'],
})
export class Seite3Page {

  /** Variable ist mit Two-Way-Binding an `ion-select` gebunden, für Auswahl Frequenzbereich. */
  public frequenzband = "band_24";

  /** Variable ist mit Two-Way-Binding an `ion-select` gebunden, für Auswahl Kanalbreite in MHz. */
  public kanalbreite = "breite_20";

  /** Variable ist mit Two-Way-Binding an `ion-select` gebunden, für Auswahl Anzahl der Streams. */
  public anzahlStreams = "streams_1";


  /**
   * Constructor für *Dependency Injection*.
   */
  constructor(private alertCtrl: AlertController) {}


  /**
   * Event-Handler für Button zur Durchführung der Berechnung.
   */
  public onBerechnenButton() {

    let faktorKanalbreite = 0;
    let faktorStreams     = 0;
    let grunddatenrate    = 0;

    switch (this.kanalbreite) {

        case "breite_20" : faktorKanalbreite = 1; break;
        case "breite_40" : faktorKanalbreite = 2; break;
        case "breite_80" : faktorKanalbreite = 4; break;
        case "breite_160": faktorKanalbreite = 8; break;

        default:
          this.zeigeDialog("Interner Fehler", `Unerwarteter Code "${this.kanalbreite}" für Kanalbreite.`);
          return;
    }

    switch (this.frequenzband) {

        case "band_24": grunddatenrate = 144;
                        if (faktorKanalbreite > 2) {

                            this.zeigeDialog("Ungültige Eingabe",
                                             "Kanalbreiten größer 40 MHz sind nur im 5 GHz-Band möglich.");
                            return;
                        }
                        break;

        case "band_5" : grunddatenrate = 150; break;

        default:
            this.zeigeDialog("Interner Fehler", `Unerwarteter Code "${this.frequenzband}" für Frequenzband.`);
            return;
    }

    switch (this.anzahlStreams) {

      case "streams_1": faktorStreams = 1; break;
      case "streams_2": faktorStreams = 2; break;
      case "streams_3": faktorStreams = 3; break;
      case "streams_4": faktorStreams = 4; break;
      case "streams_5": faktorStreams = 5; break;
      case "streams_6": faktorStreams = 6; break;
      case "streams_7": faktorStreams = 7; break;
      case "streams_8": faktorStreams = 8; break;

      default:
        this.zeigeDialog("Interner Fehler", `Unerwarteter Code "${this.anzahlStreams}" für Anzahl Streams.`);
        return;
    }


    // Eigentliche Berechnung
    const datenrate = grunddatenrate * faktorKanalbreite * faktorStreams;

    this.zeigeDialog("Ergebnis", `Maximale Datenrate (Brutto):<br><br>${datenrate} MBits/s`);
  }


  /**
   * Alert/Dialog anzeigen.
   *
   * @param title  Dialog-Titel, z.B. "Fehler" oder "Ungültige Eingabe".
   *
   * @param nachricht  Eigentlich Nachricht des Dialogs.
   */
  private async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }

}
