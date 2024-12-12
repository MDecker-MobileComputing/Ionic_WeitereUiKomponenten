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
  public farbeHexCode = "";

  /** Wert für Toggle-Button zum Ein-/ausschalten von Rot-Anteil. */
  public rotAn = false;

    /** Wert für Toggle-Button zum Ein-/ausschalten von Grün-Anteil. */
    public gruenAn = true;

  /** Wert für Toggle-Button zum Ein-/ausschalten von Blau-Anteil. */
  public blauAn = true;


  /**
   * Event-Handler-Methode für Änderung Zustand einer der Toggle-Buttons.
   */
  public onToggleGeandert() {

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
    * Generiert einen Farbcode basierend auf den Werten der Eigenschaften `rotAn`, `gruenAn` und `blauAn`.
    * Der Farbcode wird der Eigenschaft 'farbeHexCode' zugewiesen.
    */
  private erstelleFarbcode() {

    let farbcode = "#";

    if (this.rotAn  ) { farbcode += "FF"; } else { farbcode += "00"; }
    if (this.gruenAn) { farbcode += "FF"; } else { farbcode += "00"; }
    if (this.blauAn ) { farbcode += "FF"; } else { farbcode += "00"; }

    this.farbeHexCode = farbcode;
  }

}
