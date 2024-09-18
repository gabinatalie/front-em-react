// para imprimir
console.log("Hello World");
console.log("Estamos na nossa aula 06");

// Camel Case
var nome = "Gabrielle Alves"; // string - texto - utilize aspas
var idade = 27; // number
var altura = 1.77; // number
var estudando = true; // boolean (true or false)

console.log(nome);
console.log(typeof nome);
//typeof - imprime qual o tipo da variável
//pode ser usado assim também:
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var semConteudo;
// declarando uma variável sem atribuir um conteúdo

console.log(semConteudo);
// lê 'undefined' pois não recebeu nenhum conteúdo

var curso = "front end em react",
  topico = "JS básico I";
// declarando mais de uma variável em uma mesma linha, somente separando por vírgula
console.log(curso, topico);

// ! var não é a melhor forma de declarar variáveis no JS hoje em dia - é mais usado

let notaDoAluno = 10; // let - let it change = permite mudança
const mediaDoAluno = 8; // const - constante = não muda

notaDoAluno = 9;
// ! mediaDoAluno = 5; - não é permitido, uma vez criada a constante você não altera mais ela. 

console.log(notaDoAluno);
console.log(mediaDoAluno);

