class Caixa {
   entradas: number[];
   saidas: number[];

   constructor() {
      this.entradas = [];
      this.saidas = [];
   }

   realizarEntrada(numb: number) {
      this.entradas.push(numb);
   }

   realizarSaida(numb: number) {
      this.saidas.push(numb);
   }

   calcularTotal() {
      let entradas = 0;
      let saidas = 0;
      for (let entrada of this.entradas) {
         entradas += entrada;
      }
      for (let saida of this.saidas) {
         saidas += saida;
      }
      return entradas - saidas;
   }
}

let caixa: Caixa = new Caixa();

caixa.realizarEntrada(350);
caixa.realizarEntrada(30);
caixa.realizarSaida(100);
console.log(caixa.calcularTotal());
