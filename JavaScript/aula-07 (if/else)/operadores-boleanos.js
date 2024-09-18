// Operadores boleanos são baseados em comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 === "10");
// pode usar 2 iguais ou 3 iguais - quando usamos 2 iguais '==' só compara o valor mas não compara o tipo, enquanto a comparação com 3 iguais '===', compara o valor e o tipo da variável. Usar os 3 iguais é boa prática e mais usado. Vai comparar se são identicas.

console.log(numero1 != "10");
console.log(numero1 !== "10");
//Mesma coisa, pode ser usado '!='para comparar o conteúdo e '!==' para comparar conteúdo e tipo.

const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
// '&&'- conjunção - and = junta duas variáveis em uma única 'comparação'
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);
// '||' - or - no caso ele vai analisar uma ou outra, ao invés de verificar se as duas são

console.log(!true);
// faz a inversão da variável, imprime o oposto, diferente

console.log(!(idadePessoa1 >= 18));//entre parenteses pois primeiro ele vai analisar a variável e com o resultado vai apresentar o contrário/inverso. Ex: antes estava verificando se a pessoa era maior de idade, iria retornar 'falso', mas com a exclamação verifica o contrário, verifica se a pessoa é menor de idade, então o resultado seria 'verdadeiro'.


