async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "numero do id",
    },
  });
  const users = await resposta.json();

  console.log(users);
}
getUsers();

async function getUser() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user/idDoUsuario", {
    headers: {
      "app-id": "numero do id",
    },
  });
  const user = await resposta.json();

  console.log(user);
}

getUser();

async function creatUser() {
  const userData = {
    firstName: "Gabrielle",
    lastName: "Alves",
    email: "gabi-natalie@email.com",
  }; // cria o objeto do usuário a ser incluso, porém o body não aceita o objeto, é necessário converte-lo para STRING = json.stringify()

  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "numero do id",
        "Content-Type": "application/json", // isso gerou automaticamente no insomnia, só repiclou aqui.
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log("Deu erro ao tentar criar um novo usuário", erro);
  }
} // não estou pegando uma resposta do fetch em uma variável, apenas estou criando no bando de dados/api.

creatUser();

// ! testar deletar usuário
//requisição do tipo DELETE, com o id do usuario na URL, inclindo o cabeçalho sempre, pois essa API é obrigatório
