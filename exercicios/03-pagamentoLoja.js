let preco = 60;
let aVista = preco - (preco * 0.10);
let parcelado = preco / 3;

console.log("Preço: R$" + preco.toFixed(2));
console.log("A vista: R$" + aVista.toFixed(2));
console.log("Parcelado em 3 vezes: R$" + parcelado.toFixed(2)); // ou console.log("Parcelado em 3 vezes: R$" + (preco / 3).toFixed(2));