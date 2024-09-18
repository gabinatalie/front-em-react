// * 3. Async/await:

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
}

async function leituraDeDados() {
  console.log("Isso é executado antes da promisse ser resolvida");

  try {
    const dadosDoArquivo = await lerArquivoPromisse(); //await só pode ser usado dentro do escopo de uma função assíncrona // o await espera a promessa ser resolvida para avançar no código, dentro do escopo.
    console.log(dadosDoArquivo);
    console.log("Isso é executado depois da promisse ser resolvida");
  } catch (erro) {
    console.log(erro);
    console.log("Isso é executado depois da promessa com erro");
  } finally {
    console.log("Dentro do finally");
  }
}
//async/await faz com que o processo seja sequencial dentro do escopo.
leituraDeDados();
//retorna a função quando ela da certo, necessário passar parâmetro caso dê erro.
//try - catch - tenta resolver a promessa, se der certo, imprime o conteúdo, se der errado, imprime erro.
