// ! filter ()
//ao invés de buscar todos os elementos/objetos do array original, ele busca algo específico
//filtra somente valores que respeitam uma determinada condição

// ex: trazer um novo array somente com os números pares.
const valores = [50, 32, 47, 19, 8, 63, 20, 49, 101];

const parEcontrado = valores.find((valor) => valor % 2 === 0);
console.log(parEcontrado);
//retornou o primeiro número par que ele encontrou

const valoresPares = valores.filter((valor) => valor % 2 === 0);
console.log(valoresPares);

console.clear();

//ex 2: crie um código que obetenha apenas os dados dos alunos que tem uma média superior a 85. Em seguida, imprima os dados deles na tela

const alunos = [
  { nome: "Julia", media: 96 },
  { nome: "André", media: 84 },
  { nome: "Marcos", media: 100 },
  { nome: "Gabrielle", media: 90 },
  { nome: "Antonio", media: 65 },
];

const aprovados = alunos.filter((aluno) => aluno.media > 85);
console.log(aprovados);
console.clear();

//ex 3: Crie um script para filtrar apenas pelos produtos que custam menos de R$ 10,00 e não são bebidas

const produtos = [
  { nome: "suco de laranja", preco: 7.5, tipo: "bebida" },
  { nome: "batata frita", preco: 10.5, tipo: "comida" },
  { nome: "pizza", preco: 12.49, tipo: "comida" },
  { nome: "chocolate", preco: 1.5, tipo: "comida" },
  { nome: "pastel", preco: 4.5, tipo: "comida" },
  { nome: "coca-cola", preco: 6.99, tipo: "bebida" },
];

const comidasBaratas = produtos.filter(
  (produto) => produto.preco < 10 && produto.tipo !== "bebida"
);

console.log(comidasBaratas);
