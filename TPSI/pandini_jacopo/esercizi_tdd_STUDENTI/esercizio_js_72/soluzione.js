export class Studente {
  constructor(nome, anni) {
    this.nome = nome;
    this.anni = anni;
  }
}

export class Docente {
  constructor(nome, anni) {
    this.nome = nome;
    this.anni = anni;
  }
}

export const confrontaOBJ = (obj1, obj2) => {

  if (obj1.constructor.name !== obj2.constructor.name) return false;
  
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

let studente = new Studente("Mario", 4);
let docente = new Docente("Mario", 4);

console.log("Confronto Studente e Docente con stessi dati:", confrontaOBJ(studente, docente));



