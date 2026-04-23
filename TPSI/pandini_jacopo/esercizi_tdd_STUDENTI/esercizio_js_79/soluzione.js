export class Automobile {
  constructor() {
      this.accesa = false;
      this._persone = 0;
      this._velocita = 0;
      this._marcia = 1;
  }

  get persone() {
      return this._persone;
  }

  set persone(valore) {
      if (valore > 9 || this._velocita > 0) {
          throw new Error("Impossibile modificare il numero di persone");
      }
      this._persone = valore;
  }

  get velocita() {
      return this._velocita;
  }

  set velocita(valore) {
      if (!this.accesa || valore < 0 || valore > 160) {
          throw new Error("Velocità non valida o auto spenta");
      }
      this._velocita = valore;
  }

  get marcia() {
      return this._marcia;
  }

  aggiungi_marcia() {
      if (!this.accesa || this._marcia >= 6) {
          throw new Error("Impossibile aumentare marcia");
      }
      this._marcia++;
  }

  togli_marcia() {
      if (!this.accesa || this._marcia <= 1) {
          throw new Error("Impossibile scalare marcia");
      }
      this._marcia--;
  }
}
