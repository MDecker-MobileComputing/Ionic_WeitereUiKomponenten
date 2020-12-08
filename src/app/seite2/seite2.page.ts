import { Component } from '@angular/core';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
})
export class Seite2Page {

  /**
   * Hexcode von aktuellem Farbcode, wird per Interpolation an CSS-Attribut gebunden.
   *
   * Beispiel-Wert für gelb: `#FFFF00`
   */
  private farbeHexCode = "";

  /** Wert für Toggle-Button zum Ein-/ausschalten von Rot-Anteil. */
  private rotAn = false;

    /** Wert für Toggle-Button zum Ein-/ausschalten von Grün-Anteil. */
  private gruenAn = true;

  /** Wert für Toggle-Button zum Ein-/ausschalten von Blau-Anteil. */
  private blauAn = true;


  /**
   * Event-Handler-Methode für Änderung Zustand einer der Toggle-Buttons.
   */
  private onToggleGeandert() {

    this.erstelleFarbcode();
  }


  /**
   * Lifecycle-Methode, wird unmittelbar vor Anzeige der Seite aufgerufen; führt
   * Neuberechnung von Farbcode aus.
   */
  private ionViewWillEnter() {

    this.erstelleFarbcode();
  }


  /**
   * Aktuellen Farbcode erstellen und in Member-Variable schreiben.
   */
  private erstelleFarbcode() {

    let farbcode = "#";

    if (this.rotAn  ) { farbcode += "FF"; } else { farbcode += "00"; }
    if (this.gruenAn) { farbcode += "FF"; } else { farbcode += "00"; }
    if (this.blauAn ) { farbcode += "FF"; } else { farbcode += "00"; }

    this.farbeHexCode = farbcode;
  }

}
