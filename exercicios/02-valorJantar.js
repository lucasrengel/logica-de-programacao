let valorJantar = 80  ;
let taxaGarcom = valorJantar * 0.10;
let totalJantar = valorJantar + taxaGarcom;

console.log("Valor total da jantar: R$" + valorJantar.toFixed(2));
console.log("Valor total da taxa do Garçom: R$" + taxaGarcom.toFixed(2));
console.log("Valor total a pagar incluso com a taxa do garçom: R$" + totalJantar.toFixed(2));