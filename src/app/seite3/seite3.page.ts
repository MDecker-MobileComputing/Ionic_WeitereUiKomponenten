import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

/**
 * Tabellen mit Datenraten von 802.11ax:
 * https://www.elektronik-kompendium.de/sites/net/0610051.htm
 */
@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.page.html',
  styleUrls: ['./seite3.page.scss'],
})
export class Seite3Page {

  /** Variable ist mit Two-Way-Binding an `ion-select` gebunden, für Auswahl Kanalbreite in MHz. */
  private kanalbreite = "breite_20";

  /** Variable ist mit Two-Way-Binding an `ion-select` gebunden, für Auswahl Anzahl der Streams. */
  private anzahlStreams = "streams_1";

  /**
   * Constructor für *Dependency Injection*.
   */
  constructor(private alertCtrl: AlertController) {}


  /**
   * Event-Handler für Button zur Durchführung der Berechnung.
   */
  private onBerechnenButton() {

    let faktorKanalbreite = 0;
    let faktorStreams     = 0;

    switch (this.kanalbreite) {

      case "breite_20" : faktorKanalbreite = 1; break;
      case "breite_40" : faktorKanalbreite = 2; break;
      case "breite_80" : faktorKanalbreite = 4; break;
      case "breite_160": faktorKanalbreite = 8; break;

      default:
        this.zeigeDialog("Interner Fehler", `Unerwarteter Code "${this.kanalbreite}" für Kanalbreite.`);
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

    const datenrate = 150 * faktorKanalbreite * faktorStreams;

    this.zeigeDialog("Ergebnis", `Maximale Datenrate (Brutto):<br><br>${datenrate} MBits/s`);
  }


  /**
   * Alert/Dialog anzeigen.
   *
   * @param title  Dialog-Titel, z.B. "Fehler" oder "Ungültige Eingabe".
   *
   * @param nachricht  Eigentlich Nachricht des Dialogs.
   */
  async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }


}
