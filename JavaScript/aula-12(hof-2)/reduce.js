// ! reduce()
//método que executa (para cada elemento do array) a função que foi passada como parâmetro, resultando em um elemento único
//reduz o array a um elemento menor
//ex 1: calcular a soma dos elementos de um array

//reduce aceita parâmetros: primeiro parâmetro: previous value (resultado do que você está reduzindo - contador). segundo parâmetro: current value: valor atual, cada elemento do objeto. terceito parâmetro current index: index. quarto parâmetro: array completo.
// só o que muda é o primeiro parâmetro. - acumulador = aquilo que está reduzindo
//retorna o que está acumulando no processo da redução.
//primeiro parâmetro precisa ser inicializado, depois das {}, inicializador
//reduce((acumulador, elemento, index, arrayCompleto
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento) => {
  console.log(acumulador);
  return elemento + acumulador;
}, 0);
//ou seja, acumulador está iniciando em 0.
//por padrão o acumulador inicializa em 1- porém por boa prática, é bom colocar o inicializador.
//return elemento + acumulador = a cada return ele vai somar o valor do acumulador com o elemento dentro do array. 0 (0+1) 1(1+2) 3 (3+3) 6 (6+4) 10 (10+5) 15.
console.log(soma);
console.clear();

//ex 2: calcular média dos valores
// quando precisa ignorar um parâmetro e pegar o próximo, é só usar underline no lugar '_'
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  console.log(acumulador);
  return elemento / arrayCompleto.length + acumulador;
}, 0);
//pego o arrayCompleto para poder dividir o elemento pelo comprimento do arrayCompleto
console.log(media);
console.clear();

//ex 3: somar somente os numeros pares

const somaDosPares = numeros.reduce((acumulador, elemento) => {
  //se o elemento for par, ele vai tomar ao acumulador, se não for (else), ele apenas vai retornar o acumular e não fazer nada com ele
  if (elemento % 2 === 0) {
    return elemento + acumulador;
  } else {
    return acumulador;
  }
}, 0);
//* não esquecer de inicializar o acumulador, isso afetará o resultado!!
console.log(somaDosPares);
console.clear();
// ex 4: eu tenho um carrinho de compras, e quero somar o total a pagar pelo carrinho

const carrinho = [
  { produto: "feijão", preco: 7.89, quantidade: 3 },
  { produto: "arroz", preco: 4.89, quantidade: 5 },
  { produto: "leite 1l", preco: 6.99, quantidade: 2 },
];

const total = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador;
}, 0);

console.log(total);
