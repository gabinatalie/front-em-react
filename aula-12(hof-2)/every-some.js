// Continuação de High Order Functions de Arays

//array.prototype.every() - verificar se todos os elementos de um array seguem uma determinada condição retornada pela função

const numeros = [40, 34, 67, 89, 23, 16, 10];
const todosPositivos = numeros.every((elemento) => elemento > 0);
//verifica se todos os elementos são positivos - retorno boolean
console.log(todosPositivos); 

//array.proptotype.some()- verificar se algum elementos de um array torna verdadeira uma determinada condição retornada pela função.
console.clear()

const numbersTwo = [-1, 3, 7, -3, 5]

const retorno = numbersTwo.some((numero) => numero > 0)
console.log(retorno)

