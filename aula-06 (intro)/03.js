const prompt = require("readline-sync");
// require você usa quando você quer chamar uma biblioteca
const idade = prompt.question("Qual é a sua idade?");

const idadeNumber = Number(idade);
//convertendo a variável para número

console.log(idadeNumber, typeof idadeNumber);
//apareceu que o tipo é 'string' - pois a informação do PROMPT, seja aqui no Node, seja no browser, ele sempre vai ler como um 'texto'
// para converter para número: coerção (conversão) de tipos

// ! Coerção Explicíta (manual)
console.log(Number("x"));
//retornou NaN = not a number - não converte (JS)

console.log(String(10), typeof String(10));

console.log(Boolean(0));
// só da false se você colocar 0, outros números dá true

// ! Coerção Implícita

console.log(1 + "1");
// retornou 11 no terminal
//Se somar um número + string ele transforma tudo em string. No caso ali retornou 11, mas o 11 é um texto. Ele 'concatenou', transformou o primeiro 1 em texto também.

console.log(10 - "5");
//retornou 5 no terminal
// Tirando soma, o resto das operações (subtração, multiplicação, divisão, etc) ele faz o contrário, transforma a string em número e faz a operação
console.log(10 * "5");
console.log(10 / "5");

//* EXEMPLOS: Qual será a saída desse código?
let n = 1 + '1' // 11 (string)

n = n - 1
//vai transformar o 11 em número
console.log(n) // total = 10

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5") // 5 + 4 + '5' - 9 + '5'
// 95 (string)

//Qual será a saída desse código?
console.log('5' + 2 + 3 + 4) // '52' + 3 + 4 // '523' + 4
// 5234 (string)

//Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5') // 6 (num) -'3' - 2 + '5' // 3 (num) - 2 +'5' // 1 + '5' // 15 (string)