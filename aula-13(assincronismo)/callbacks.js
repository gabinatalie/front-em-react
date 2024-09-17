//! Programação assíncrona
//biblioteca existente dentro do Node.js para ler arquivo. = FS

const fs = require('fs')

//* 1. Callbacks:

console.log('Antes da função de ler o arquivo...')

//função assíncrona (ler um arquivo leva um tempo)
fs.readFile("aula-13(assincronismo)/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log('Ocorreu um erro ao tentar ler o arquivo:', erro)
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log('Depois da função de ler o arquivo...')
console.clear()
// exemplo 2 de callback: função setTimeout() - ele cria um timer, quando ele for finalizado, ele executa o que está na função de callback que foi passado para ele

console.log('Antes do setTimeout')

setTimeout(() => {
  console.log('Será executado após 2 segundos!')
}, 2 * 1000)
//executado após 2 segumos, ele pede em milisegundo.

console.log('Depois do setTimeout')