//* 2. Promisse:
const fs = require("fs");

console.log("Antes da criação da Promisse");

function lerArquivoPromisse() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "aula-13(assincronismo)/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  });
} // criando uma promisse

// passa o parâmetro e depois você da o que executar em cada parâmetro.

// ! Atenção daqui para baixo:
lerArquivoPromisse()
  .then((retornoDoResolvDaPrommise) => {
    console.log("Deu certo:", retornoDoResolvDaPrommise);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  })
  .finally(() => {
    console.log("Será executado ao final de toda forma!");
  });

//.then() ele chama o callback quando a promessa for cumprida
//.catch() se der um erro, ele captura o erro da promessa quando ela não for cumprida.
//.finally() callback que vai ser executado quando a promessa for encerrada, seja com sucesso, seja com erro. Sempre será executado.

fetch();
