const prompt = require("readline-sync");

// * Ex: Vamos sortear um número x e o usuário vai tentar adivinhar. Caso ele acerte, será avisado, caso ele erre, será solicitado outro número.

//Vamos gerar um número aleatório entre 0 e 10

//esse método Math.random() gera um número aleatório entre 0 e 1, para gerar de 0 a 10, só fazer vezes 10.
//Porém ele gera números decimais, precisamos arrendondar para o número inteiro mais próximo - função parseInt transforma o número em número inteiro, ele não arredonda, ele pega só a parte inteira do número
//outra opção seria usar o Math.round(Math.random()*10), também iria arredondar o número

const numeroAleatorio = parseInt(Math.random() * 10);

let quantidadeDeTentativas = 0

let numeroDoUsuario = Number(prompt.question('Informe um numero entre 0 e 10:'))

while (numeroAleatorio !== numeroDoUsuario) {
  quantidadeDeTentativas++;

  console.log('Voce errou o numero, tente novamente: ')

  numeroDoUsuario = Number(prompt.question("Informe um numero entre 0 e 10:"));

}
console.log('Parabens você acertou, o numero era:', numeroAleatorio);
console.log(quantidadeDeTentativas);

