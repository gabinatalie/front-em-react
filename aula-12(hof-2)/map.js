// ! As mais utilizadas
// map, filter, reduce

//map() : método do array que chama a função que passada como parâmetro para cada elemento do array e retorna um novo array como resultado
//percorre um array e retorna outro array porém com alguma mudança.
//remapeia o conteúdo e um array original, criando outro array a partir desse original

const numeros = [20, 35, 41, 62, 78, 92, 10, 8, 5];

const novoArray = numeros.map((elemento, indice, arrayCompleto) => {
  return 1; // return elemento * 2 //
});
console.log(novoArray);
//ele retornou um array do mesmo tamanho do array original composto pelos elementos que foram retornados a cada iteração - todos os elementos valem '1'
console.clear();

//Ex 1: elevando todos os números ao quadrado

const valores = [50, 32, 47, 19, 8, 63, 20, 49, 101];

const valorAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valorAoQuadrado);
console.clear();

//Ex 2: Adicione uma propriedade aos objetos do Array
//novo atributo 'total' = preço * quantidade
const carrinho = [
  { produto: "feijão", preco: 7.89, quantidade: 3 },
  { produto: "arroz", preco: 4.89, quantidade: 5 },
  { produto: "leite 1l", preco: 6.99, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  //analogo à: return itemDoCarinho = {...itemDoCarinho}
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);

// const pessoa = {
//   nome: 'Gabrielle',
//   idade: 31,
//   altura:1.57
// }
// pessoa.peso = 79
// console.log(pessoa)
// //adc uma propriedade e valor
// //agora para adc uma propriedade e um valor que precisa ser calculado
// //Desestruturação / Spread operator '...'
// //quero adicionar 'cor favorita'
// console.clear()
// const pessoaCorFav = {
//   ...pessoa, //significa que ele vai incluir nesse novo objeto com a Cor Fav da pessoa, todos os outros atributos que existem no objeto 'pessoa'
//   cor: 'vermelho'
// }
// console.log(pessoaCorFav)
