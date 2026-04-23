export class Poligono {
   constructor(n, l) { this.n = n; this.l = l; }
   perimetro() { return this.n * this.l; }
   area() { return (this.n * this.l ** 2) / (4 * Math.tan(Math.PI / this.n)); }
}
 
 export class Quadrato extends Poligono {
   constructor(l) { super(4, l); }
}
 
 export class TriangoloEquilatero extends Poligono {
   constructor(l) { super(3, l); }
}
 
 export class Pentagono extends Poligono {
   constructor(l) { super(5, l); }
}
 
 export class Esagono extends Poligono {
   constructor(l) { super(6, l); }
}
 
 export class Ettagono extends Poligono {
   constructor(l) { super(7, l); }
}
 
 export class Ottagono extends Poligono {
   constructor(l) { super(8, l); }
}

 