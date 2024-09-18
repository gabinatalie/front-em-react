const nota1 = 10;
const nota2 = 9;

const somaDasNotas = nota1 + nota2;
let mediaDasNotas = somaDasNotas / 2;

//a mesma coisa porém feita diferente
mediaDasNotas = nota1 + nota2 / 2;
// porém o resultado deu incorreto, pois ele fez a divisão primeiro e a soma depois, o correto seria usar os ( ) para dar precedência. Ele sempre vai fazer dos () mais internos aos mais externos.

console.log("Soma das notas =", somaDasNotas);
console.log("Média das notas =", mediaDasNotas);

const numero = 16;
const raizDoNumero = Math.sqrt(numero)

console.log("Raiz quadrada de 16 =", raizDoNumero);