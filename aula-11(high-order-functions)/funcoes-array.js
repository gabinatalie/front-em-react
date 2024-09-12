//Funções de Alta Ordem de Array

// Array.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

/* function imprimirElemento(elemento){
  console.log(elemento)
} */ //função otimizada com arrow function no forEach em baixo.

//semantica: nomeDoArray.nomeDaFunçãoDeAltaOrdem()
numeros.forEach((value, indice, arrayCompleto) => {
  console.log(value, indice, arrayCompleto);
});
//nessa função, ela pode receber até 3 parâmetros. Não importa o nome que for dado ao parâmetro, ele vai trazer os resultados nessa ordem.O primeiro é o 'valor' cada item do seu array. O segundo parâmetro é o index, posição do item dentro do array. O terceiro parâmetro é o array completo com todo o conteúdo do array naquele momento

//callback function: chamada depois
//para cada...
//percorre cada elemento da função (como o for)
//ele imprimiu cada item de dentro do array.

//find() - encontrar um elemento
//precisa retornar uma condição, que quando a condição for verdadeira, ele retorna.

console.clear();

const encontrado = numeros.find((numero) => {
  return numero > 60;
});
//quando ele encontra o elemento, ele retorna aquele elemento. se ele não encontrar, retorna undefined.
console.log(encontrado);

const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 20,
  },
  {
    nome: "Pessoa 2",
    idade: 25,
  },
  {
    nome: "Pessoa 3",
    idade: 55,
  },
];
//array de objetos.

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 20);
//se substituir o find por findIndex, ele busca qual indice está o que você busca dentro do array. Se ele não encontrar, ele não retorna undefined mas sim '-1', significa que não foi encontrado.

console.log(pessoaEncontrada);
