//definição da função
function saudacao() {
  console.log("Olá, seja bem vinda ao curso!");
}
//sintaxe: function nomeDaFuncao() //segue padrão Camel Case

//Chamada da função saudação:
saudacao();
saudacao();
saudacao();
//o bloco é repetido quantas vezes for chamado.

//Você pode adicionar parâmetros à função

//função novaSaudacao recebe o parâmero nomeDoEstudante.
function novaSaudacao(nomeDoEstudante) {
  console.log("Olá", nomeDoEstudante);
  console.log("Seja bem vinda ao curso!");
}

novaSaudacao("Gabrielle");
// quando você cria um parâmetro para a função, ele precisa ser definido na chamada dessa função.

//! template string || template literals
function novaSauda(nomeDoEstudante, curso) {
  // pode passar quantos parâmetros necessários.
  console.log(`Olá, ${nomeDoEstudante}!`);
  //sem o template string ficaria ("Olá", nomeDoEstudante, "!") porém no console.log imprimiria Olá, Gabrielle ! - com espaço entre a variável e o texto, pois a vírgula automaticamente inclui um espaçamento. Usando o template string não. Por isso coloca a crase e na variável ${}, você injeta a variável ou um código HTML, ou de texto, direto pra dentro da string.
  console.log(`Sejá bem vinda ao curso de ${curso}`);
}

novaSauda("Clara", "Front End");

//normalmente não se usa o console.log dentro de uma função, normalmente a função vai receber aquele parâmetro e armazena-lo em outra variável para ser utilizada poesteriormente.
//As funções tem parâmetro, mas ela retorna algo para você.
//Exemplos:

function novaSau(nomeDoEstudante, curso) {
  return `Olá, ${nomeDoEstudante}! Sejá bem vinda ao curso de ${curso}`;
}
//transformei as duas template string em uma só e usei a função return sem parênteses, vai retornar essa saudação.

//agora como ele vai retornar a saudação, eu crio uma variável que receba o retorno dessa saudação com os parâmetros que vou passar dentro da variável
const mensagemDaSaudacao = novaSau("Gabrielle", "Front-End em React"); // chamada da função

console.log(mensagemDaSaudacao);
//poderia pegar essa informação e salvar em um arquivo, etc.

//! Parâmetro padrão (default)
// na chamada da função, passamos os parâmetros, caso não passe nada, irá retornar undefined. Você pode pré definir um parâmetro padrão, para caso não seja passado um valor na chamada, ele assuma o valor indicado antes.
//se o parâmetro for passado na chamada da função, ele substitui.
function novaSa(nomeDoEstudant, curs = "Front-End em React!") {
  return `Olá, ${nomeDoEstudant}! Sejá bem vinda ao curso de ${curs}`;
}
const mensagemDaSa = novaSa("Gabrielle");

// Função simples para soma:

console.clear();

function somar(numero1, numero2){
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);
