function diagonalDifference(arr){
  let lDig = 0;
  let rDig = 0;

  for(let index = 0; index < arr.length; index++){
    lDig += arr[index][index];
    rDig += arr[index][arr.length - 1 - index];
  }
  return Math.abs(lDig - rDig);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));