//SOLUÇÃO 1

function verificaPalindromo1(str){
if(!str){
return "Não foi passado nenhum parâmetro";
};

return str.split("").reverse().join("") === str;
}

console.log(verificaPalindromo1('arara'));


//SOLUÇÃO 2

function verificaPalindromo2(str) {
  if (!str) {
    console.log("Não foi passado nenhum parâmetro");
  };

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return "Não são palidromos";
    } else {
      return "São palidromos";
    }
  }
}

console.log(verificaPalindromo2('arara'));