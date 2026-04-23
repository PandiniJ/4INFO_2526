export class Automobile {
    constructor() {
      this.brand = "";
      this.model = "";
      this.year = 0;
      this.color = "";
      this.cc = 0;
    }
  
    accendi() { return `La ${this.brand} ${this.model} è accesa.`; }
    suona() { return "Beep Beep!"; }
    descrizione() { return `${this.brand} ${this.model} del ${this.year}`; }
  }
  
  const garage = [];
  const marche = ["Audi", "Fiat", "Tesla", "BMW", "Ford"];
  
  for (let i = 0; i < 5; i++) {
    const auto = new Automobile();
    auto.brand = marche[i];
    auto.model = "Modello-" + (i + 1);
    auto.year = 2020 + i;
    auto.color = "Nero";
    auto.cc = 1200 + (i * 200);
    
    garage.push(auto);
    
    console.log(auto.accendi());
    console.log(auto.suona());
    console.log(auto.descrizione());
    console.log("---");
}
  