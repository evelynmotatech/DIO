const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
  const mySet = new Set(arr);

  //criar um array novo
  return [...mySet];
}

console.log(valoresUnicos(meuArray));