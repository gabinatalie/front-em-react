let notaDoAluno = Number(prompt.question("Informe a nota do aluno:"));

let somaDasNotas = 0;
//variável acumulador (muito usada em repetições) - vai acumular a soma das notas

while (notaDoAluno >= 0) {
somaDasNotas = somaDasNotas + notaDoAluno; // incremento - está incrementando o acumulador

notaDoAluno = Number(prompt.question("Informe a proxima nota:"))
}