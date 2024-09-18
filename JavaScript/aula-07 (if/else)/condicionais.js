const prompt = require("readline-sync");
// criei a variável prompt para chamar (require) a biblioteca que instalei - para gerar um 'prompt'/ 'pergunta interativa' dentro do terminal

const idade = Number(prompt.question("Qual sua idade?"));
// aqui estou dizendo que a resposta para essa pergunta ficara armazenada na variável idade, e o 'Number', garante que a resposta obtida em forma de string (pois sempre uma resposta de um prompt será uma string) para uma variável tipo número.

//Quero saber se a pessoa é maior de idade
const maiorDeIdade = idade >= 18;
//variável sempre com nome significativo, que expressa o que a variável contém.

// ! Estrutura condicional : if/else
// dentro das chaves está criando o escopo da condição, só será executada se for verdadeiro
if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

const mediaDoAluno = 8;

//Media >=7 Aprovado
//Media < 7 e >= 5 Prova final
//Media < 5 Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado!");
  console.log("Parabéns 🎉");
} else if (mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

// 1.Preciso ser maior de idae
// 2.Preciso ter uma CNH

const idadeDaPessoa = 18;
const temCnh = true;

if (idadeDaPessoa >= 18 && temCnh) {
  console.log('Você pode dirigir!')
} else {
  console.log('Você NÃO pode dirigir!')
}