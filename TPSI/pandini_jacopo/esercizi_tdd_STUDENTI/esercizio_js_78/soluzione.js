export class Orario {
   constructor(h, m, s) {
       this.h = h % 24;
       this.m = m;
       this.s = s;
   }

   toSeconds() {
       return this.h * 3600 + this.m * 60 + this.s;
   }

   min(...altriOrari) {
       const tutti = [this, ...altriOrari];

       const minimo = tutti.reduce((prec, corr) => {
           return corr.toSeconds() < prec.toSeconds() ? corr : prec;
       });

       return {
           h: minimo.h,
           m: minimo.m,
           s: minimo.s
       };
   }
}

