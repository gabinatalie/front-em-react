const prompt = require("readline-sync");

let saldo = Number(prompt.question("Qual eh o seu saldo?"));

while (saldo < 0) {
  saldo = Number(
    prompt.question("Saldo invalido! Por favor, informe novamente:")
  );
}
console.log(saldo);
//Com o if, ele executa o código apenas uma vez, se na hora de digitar o saldo novamente, for digitado outro número negativo, ele irá imprimir o número digitado.
// Com o while, você consegue repetir a execução até que o usuário digite um saldo válido.

//Quero obter as notas de alunos, para calcular a média, porém quero as notas até que uma seja negativa.

let notaDoAluno = Number(prompt.question("Informe a nota do aluno:"));

let somaDasNotas = 0;
//variável acumulador (muito usada em repetições) - vai acumular a soma das notas
let qtdNotasValidas = 0;
//para calcular a média das notas, falta saber quantas notas foram digitadas. É criado então outro acumulador, para contar quantas notas foram digitadas

while (notaDoAluno >= 0) {
  somaDasNotas = somaDasNotas + notaDoAluno;
  // incremento - está incrementando o acumulador
  //somaDasNotas += notaDoAluno - faz a mesma coisa porém com uma sintaxe mais curta

  qtdNotasValidas = qtdNotasValidas + 1;
  //quando você quer pegar uma variável e ir adc +1 apenas, pode ser usado dessa forma, faz a mesma coisa também, porém com a sintaxe mais curta
  //'qtdNotadValidas ++' recebe a mesma coisa que a descrita acima - se chama pós incremento

  notaDoAluno = Number(prompt.question("Informe a proxima nota:"));
}
console.log(somaDasNotas);
console.log(qtdNotasValidas);

console.log("Média das notas dos alunos:", somaDasNotas / qtdNotasValidas);
//imprime a média dos alunos e faz a operação dentro de uma mesma linha de código.
