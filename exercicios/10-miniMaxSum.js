function miniMaxSum(arr) {
  arr.sort((a, b) => a - b)
  let min = 0;
  let max = 0;
  
  for(let index = 0; index < arr.length; index++){
    if(index < arr.length - 1) min += arr[index]
        
    if(index > 0) max += arr[index]
  }
  return [min, max];
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));