function substituirPares(arr){
  if(arr.length == 0 || isNaN(arr)){
    return -1
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      console.log("Você já é zero!");
    } else if (arr[i] % 2 === 0){
      console.log("Trocando " + arr[i] + " por zero");
      arr[i] = 0;
    } else {
      arr[i] = arr[i];
    }
  }
  return arr;
}

console.log(substituirPares([1, 'tudo', 'bem', 'com', 'você', '?']));