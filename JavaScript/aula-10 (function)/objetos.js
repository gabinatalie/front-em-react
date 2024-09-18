// ! Object Literal

const array = ['Gabrielle', 31, 1.57, true]

//pessoa é o objeto { chave(atributo): valor} - chave não precissa de ''. Só é necessário de for mais de uma palavra ex: 'nome da pessoa' ou poderia ser: nome_da_pessoa ou nomeDaPessoa, são mais comuns. 
const pessoa = {
  nome: 'Gabrielle',
  idade: 31,
  altura: 1.57,
  ehGata: true,
  hobbies: ['Ler', 'Assistir filme', 'Cozinhar'],
  imprimirAlgo: () => { console.log("chamou a função!") }
  //a chave do atributo, já fica como variável para essa função, então o mais correto seria usar uma função anonima arrow function, pra dizer que o atributo 'funcao' do objeto recebe a função deseja.
  
}

console.log(pessoa)
console.log(pessoa.nome)
// chama o objeto e o atributo dentro do objeto
console.log(pessoa['hobbies'])
console.log(pessoa.hobbies[0])
//trouxe o atributo dento do objeto, atributo era um array, trouxe o especifico.

//criar novo atributo e adicionar ao objeto:
pessoa.profissao = 'Desenvolvedor'


//alterar o valor de um atributo:
pessoa.nome = "Gabrielle Alves"

//deletar propriedades do objeto:
delete pessoa.altura

console.clear()

pessoa.imprimirAlgo()
//chama dessa forma pois é uma função.

  
// Sintaxe simpliticada para adicionar propriedades para o objeto:

const idade = 27
const altura = 1.77

const objeto = {
  idade,
  altura,
  //redundante - idade: idade,
  //altura: altura,
  //pode usar o mesmo atributo se ele já tive um valor pre existente. 
  //ele entende que o atributo tem o valor da variável com mesmo nome
}

console.log(objeto)

console.clear();

//Desistruturação do objeto

//const nome = pessoa.nome - também é redundante - pode fazer assim:
const { nome } = pessoa
//ou seja, cria uma variável e dentro do objeto pessoa ele vai buscar o atributo que leva o mesmo nome da variável
// pode chamar mais de um atributo também

const { ehGata, hobbies } = pessoa

console.log(nome)
console.log(hobbies)
console.log(ehGata)
console.log(pessoa)
