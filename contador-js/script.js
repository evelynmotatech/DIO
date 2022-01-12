var currentNumberWrapper = document.getElementById('currentNumber');
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var info = document.getElementById('info');

var count = 0;

increment.addEventListener('click', function increment(){  
  if(count < 10){
    info.innerHTML = "";
    count ++;    
    currentNumberWrapper.innerHTML = count;
  }else{
    info.innerHTML = "Limite máximo do contador atingido";
  }
});


decrement.addEventListener('click', function decrement(){  
  if(count > 0){
    info.innerHTML = "";    
    count --;
    currentNumberWrapper.innerHTML = count;
  }  else{
    info.innerHTML = "Limite mínimo do contador atingido";
  }
});