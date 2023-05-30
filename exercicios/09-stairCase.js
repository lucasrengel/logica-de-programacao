function stairCase(n){
  let hash = '#';
  let inputline = '';
  let inputPosition = n - 1;

  for(let lineIndex = 0; lineIndex < n; lineIndex++){
    for(let columnIndex = 0; columnIndex < n; columnIndex++){
      if(columnIndex < inputPosition){
        inputline += ' ';
      } else{
        inputline += hash;
      }
    }
    console.log(inputline);
    inputline = '';
    inputPosition -= 1;
  }
}

stairCase(3);