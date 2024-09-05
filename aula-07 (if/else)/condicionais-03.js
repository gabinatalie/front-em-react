// * Operador Ternário
// É uma forma mais curta e simples de fazer um if/else em apenas uma linha. Porém deve ser usado para execuções simples onde a vai executar apenas uma coisa/uma linha.

const idade = 21;

idade >= 18 ? console.log('Maior de idade') : console.log('Você é menor de idade')
// a leitura ficaria 'é maior de 18? se sim (? representa essa concordância, caso a info seja verdadeira), imprima isso, se não (else representado pelo ':'), imprima isso.
// normalmente é mais usado para retornar valores

//outro exemplo da mesma comparação de cima:
const mensagem2 = idade >= 18 ? 'Maior de idade ' : 'Menor de idade';
console.log(mensagem2)
//lê-se: a variável mensagem, se a variável idade for maior ou igual a 18, salvar 'maior de idade', do contrário, salvar 'menor de idade'.

// No react pode usar dentro do HTML, para dependendo de uma condição, mostrar um conteúdo dentro da página ou outro.

//é permitido concatenar um ternário dentro de outro, porém não é uma boa prática. Melhor usar quando são só duas opções, ou isso ou aquilo. ex:

const mensagem = idade >= 18 ? "Maior de idade " : idade >= 16 ? 'Já pode votar' : 'Menor de idade';
console.log(mensagem);


