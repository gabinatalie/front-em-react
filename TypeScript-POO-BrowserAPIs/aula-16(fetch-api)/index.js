console.log("Fetch API");

//Fetch API - fetch() - função que faz a requisição HTTP
//formas de utilizar uma promisse:

//then / catch
fetch("http://viacep.com.br/ws/01001000/json/")
  .then((response) => {
    const data = response.json().then((data) => console.log(data));
    // transforma o objeto da resposta convertido para o json //essa função de conversão também leva um tempo, ou seja, também é uma promessa.
  })
  .catch((error) => {
    console.log(error);
  });

//async/ await

async function obterDadosCep() {
  try {
    const response = await fetch("http://viacep.com.br/ws/01001000/json/");
    const dados = await response.json();
    console.log(dados);
  } catch (erro) {
    console.log("Deu erro", erro);
  } finally {
    console.log("Terminou a requisição");
  }
}
obterDadosCep();
//mesmo resultado do de cima, porém mais otimizado e curto.

// usou o try, catch, finally, para caso der algum erro no async
