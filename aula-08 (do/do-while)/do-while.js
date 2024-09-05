const prompt = require("readline-sync");

let saldo 
//undefined - variavel criada porém nao definida-

do {
  saldo = Number(
    prompt.question("Informe um saldo valido:")
  );
} while (saldo < 0);

//sempre executa o laço pelo menos 1x

console.log(saldo);
//primeiro ele executa o que está dentro, para depois verificar a comparação. 