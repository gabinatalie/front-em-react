const prompt = require("readline-sync");

// é comum ver o for associado a a uma variável 'i' (iterador/iterator)
//  ESTRUTURA DO FOR:

//for (expressão 1; expressão 2; expressão 3;) {
//o escopo do for }

//expressão 1: inicialização da variável de controle (controle quantas vezes vai acontecer)
//expressão 2: condição  de permanencia do for
//expressão 3: incremento da variável de controle

//o for permite você usar a variável dentro do escopo, sem ter definido ela fora do bloco

/* for (let i = 0; i < 5; i += 2) {
  console.log(i);
}

console.log("variavel i =", i); */ //vai dar undefined, pois ela só existe dentro do escopo do for.

// é possível também omitir parâmetros no for. ex:
// for (i = 0; i < 5;) {
// console.log(i);}
// poderia usar a mesma coisa, mas sem definir o incremento, que não irá acontecer, porém é permitido. Se fzer sem o incremendo, ele entra num loop infinito.

//duas opções de laços infinitos:
// for (; ;){ } -
// while (true) { } - mais comum

console.clear();
// limpa o terminal e roda o código somente a partir daqui, não roda o que vem antes

/* // * Quero ler 5 números e imprimir o maior:

let maiorNumero = 0;
let numeroInformado;

for (let i = 0; i < 5; i++) {
  numeroInformado = Number(prompt.question('Informe um numero positivo: '));

  if (numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado;
    }
}

console.log('Maior numero:', maiorNumero) */

//* Exemplo:percorrer strings com for //

/* console.log(nome.length); */
// atributo pega o cumprimento de qualquer string que você tiver no código

/* console.log (nome [0]) */
// imprimir uma letra de uma string, entre [] é o indice, o indice 0 é a primeira letra (posição). 

const nome = "Gabrielle";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
  //if (i === 4){break}
}

// percorre a string pois a cada loop ele vai acessar um indice da string (cada letra) em todas as posições. 
//