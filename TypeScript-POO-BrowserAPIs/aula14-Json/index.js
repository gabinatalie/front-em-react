const fs = require("fs");
// 1. Lendo um arquivo JSON

fs.readFile(
  "TypeScript-POO-BrowserAPIs/aula14-Json/arquivo.json",
  (erro, dados) => {
    if (erro) {
      console.log("Não é possível ler o arquivo", erro);
    } else {
      const dadosDoObjeto = JSON.parse(dados);
      //esses 'dados' são um buffer com os dados do arquivo json
      //poderia usar String(dados) porém iria transformar o JSON inteiro em texto. Para converte-lo em um objeto JSON mesmo, necessário usar assim. JSON.parse()
      console.log(dadosDoObjeto.idade);
    } //consegue pegar o objeto específico dentro do json.
  }
);
console.clear();

// 2.Convertando JSON, em formato de string para um objeto

const jsonString = '{"nome": "Gabrielle"}';
console.log(JSON.parse(jsonString));

//vai converter uma String em um objeto JSON
console.clear();

// 3.Convertendo um objeto do JS em um JSON (string)

const pessoa = {
  nome: "Megan Fox",
  filme: "Garota Infernal",
}; // é um objeto do código
//converter o objeto em um JSON

console.log(JSON.stringify(pessoa));
//stringify: ele transforma o objeto em uma string em formato de JSON. É uma string, mas o formato é de um JSON
