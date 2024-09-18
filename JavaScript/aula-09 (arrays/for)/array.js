const prompt = require("readline-sync");

const notasDoAluno = [10, 8, 5];

/* const array = [] */
// colchetes definem um array no JS
//suporta diferentes tipos de dados dentro de um mesmo array
const pessoa = ["Gabrielle", 27, 1.77, true];

console.log(notasDoAluno);
console.log(pessoa);
console.log(pessoa[1]);
//colchetes dentro da variável significa que esta acessando uma posição apenas do array, uma informação.

pessoa[3] = false;
console.log(pessoa);
// modificou uma informação específica a partir da sua posição dentro do array - mesmo se for array const

console.clear();
console.log(pessoa.length);
//cumprimento do array = quantidade de elementos dentro dele
console.log(notasDoAluno.length);

console.clear();

//* Fatiamento de Arrays

const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 2));
//slice( stars, ends) - porém o end é em qual indice eu quero parar e pegar o menor do que ele. Exemplo, se eu quero apenas os dois primeiros itens, preciso colocar indice 2, que seria o terceiro numero, e ele vai pegar do indice 0 até menor que o indice 2. Sempre colocar um indice a mais do que você quer.
console.log(numeros.slice(2));
//se você não colocar final no slice, ele vai até o final do array

//Push para incluir ao final
numeros.push(22);
console.log(numeros);

//Unshift para incluir no inicio

numeros.unshift(36);
console.log(numeros);

//Pop serve para remover o elemento que está ao final do array
console.clear();
numeros.pop(); // remove o último elemento
console.log(numeros);

numeros.shift(); // remove o primeiro elemento
console.log(numeros);

console.clear();
// Será que o elemento 20 existe no array números?
console.log(numeros.includes(10));
//Busca um determinado valor dentro do array - vai devolver true or false

if (numeros.includes(10)) {
  console.log("Opa! Existe o número 10 dentro do array números!");
}

const existeONumero20 = numeros.includes(20);
//também pode guardar em variáveis
console.clear();

//indexOf = vai buscar qual a posição do elemento dentro da array
const indiceDoElemento10 = numeros.indexOf(20);
console.log(indiceDoElemento10);
//retornou '-1', toda vez que o indexOf retornar esse valor, significa que o elemento não existe dntro do array
//! para alterar o nome de uma variável no código inteiro : clica na variável + F2.

// lastIndexOf
//ex: [10, 3, 6, 10, 4]
// se eu usar o indexOf ele vai encontrar a posição do elemento seguindo do inicio para o fim, então o primeiro que ele encontrar com aquele valor, ele retorna a posição
// Ja o lastIndexOf, vai encontrar o ultimo elemento que apresente aquele valor, ou seja, vai buscar no fim para o inicio

//percorrer um array utilizando o for: existem 3 formas. (for in, for of)

console.clear();

const arr = [45, 11, 29, 15, 12, 7, 9];
for (i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
// retorna o indice e seu conteúdo, percorrendo todo o array.
// aqui for como um laço numérico

console.log();
// for-of - permite que você percorra somente os elementos (e não o indice) de um objeto (array é um objeto)
for (const elemento of arr) {
  console.log(elemento);
}

//of-in percore as propriedades do objeto, no array as propriedades são os indices

for (const indice in arr) {
  console.log(indice, typeof indice);
  console.log(arr[indice]);
}

//no for-in esse 'indice' vai ser SEMPRE uma string. 

