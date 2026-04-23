export class Calcolatrice {
  set_result(v) { return (this.v = v, this) }
  sum(v) { return (this.v += v, this) }
  sub(v) { return (this.v -= v, this) }
  mul(v) { return (this.v *= v, this) }
  div(v) { return (this.v /= v, this) }
  get_result() { return this.v }
}


const c = new Calcolatrice();
console.log(c.set_result(6).sub(2).mul(5).sum(8).div(4).get_result()); 
