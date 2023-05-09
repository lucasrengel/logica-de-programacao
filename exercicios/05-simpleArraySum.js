/* let numeros = [1, 2, 3, 4, 10, 11]; // array sempre comeca com a posicao 0, portanto a posicao 4 = numero 10 */

function simpleArraySum(ar) {
  let sum = 0;

  for(let index = 0; index < ar.length; index++){
    sum = sum + ar[index];
  }
  return sum;
};

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
