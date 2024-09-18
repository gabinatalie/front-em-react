// High Order Function

//* 1. Função que retorna outra função como parâmetro

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem vindo(a) ao curso de ${courseName}`
    );
  };
}
//A função de saudação 'welcome' recebe o nome do curso como parâmetro e retorna a mensagem de saudação. Essa função vira objeto da função 'display....' que vai receber como parâmetro o nome do estudante. Ou seja, você não precisa repetir o nome do curso cada vez que ele recebe um nome de aluno diferente.

const displayWelcomeToFrontEndCourse = welcome("Front-End em React");

displayWelcomeToFrontEndCourse("Gabrielle");

console.clear();

//* 2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

//Em outras linguagens não se pode dividir nenhum numero por 0. No JS quando você divide um numero por 0, ele retorna no console 'Infinity', mas não dá erro.

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);
//criou uma função 'calcular' que ela recebe de parâmetro dois números e o tipo de operação, essa fução vai receber outra função 'operação' que vai receber como parâmetro dois números para realizar a operação desejada.

const retorno = calcular(10, 5, somar);
console.log(retorno);

//Quero calcular: numero1 * numero2 + (2* numero1 * numero2)

const resultado = calcular(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
 