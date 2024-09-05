# Node.js #
É uma tecnologia runtime de código aberto que permite executar JS no lado do servidor (backend), fora do ambiente do navegador. Isso significa que você pode escrever todo o código de uma aplicação web (front e back) usando JS, isso apenas graças ao Node, pois antes JS só era usado para desenvolvimento front. Isso também significa que você pode usar JS para desenvolver a lógica do lado do servidor, manipulação de banco de dados, manipulação de arquivos, criação de APIs, e muito mais.
Event-Driven: Programação orientada a eventos que melhora a eficiência em aplicações que exigem alta performance, como servidores web.
Single-Threaded: Embora seja single-threaded, Node.js usa operações assíncronas para realizar tarefas de I/O de forma eficiente.

# JavaScript

**ctrl + aspas = abre o terminal**
**JS não é necessário colocar ';' ao fim da linha, o prettier coloca automaticamente por padronização, mas não é obrigatório. Caso queira não usar como padrão, da pra arrumar no prettier**

*'Console.log'*

-É uma função do JS usada para exibir mensagens ou valores no console do navegador ou do ambiente em desenvolvimento.É uma ferramenta muito útil para depuração, pois permite que você veja o que está acontecendo no código enquanto ele é executado.
-É mais usado durante a fase de desenvolvimento e teste. Em produção, pode ser útil manter o console.log() para logs de depuração, mas você pode considerar bibliotecas de logging mais robustas para ambientes de produção.
-Não afeta a lógica do código, apenas exibe informações no console. Porém, muitas chamadas a console.log() podem afetar o desempenho e poluir o console, por isso é importante usá-lo com moderação.
ex:
console.log(nome) - vai mostrar a informação salva na variável nome

console.log(nome, typeof nome) -  mostra a info e qual tipo de variável é

*string* = texto, usando entre ''
*number* = inteiros, positivos, negativos, decimais, tudo.
*boolean* = true or false

## Variáveis ##
-No JavaScript (e em outras linguagens de programação), uma variável é um "espaço" na memória que é usado para armazenar valores que podem ser reutilizados ou manipulados ao longo do código. Pense em uma variável como uma "caixa" que pode conter dados, como números, textos, objetos, entre outros. No JavaScript, você pode declarar variáveis usando três palavras-chave principais: 
'var', 'let', e 'const'

*var:* variável mais antiga, porém é considerada menos previsível em comparação as outras duas. 
-Escopo: var é de escopo global quando declarada fora de qualquer função e de escopo de função quando declarada dentro de uma função. Não é limitada pelo escopo de bloco, o que significa que ela pode ser acessada fora do bloco onde foi declarada (por exemplo, em loops ou condicionais).
-Hoisting: As declarações de var são elevadas (hoisted) para o topo de seu contexto (função ou global), mas a inicialização não é. Isso significa que você pode referenciar a variável antes da declaração, mas ela será undefined até ser inicializada.
-Mutabilidade: A variável declarada com var pode ser reatribuída e redeclarada dentro do mesmo escopo.
ex:
console.log(x); // undefined (devido ao hoisting)
var x = 10;
console.log(x); // 10

if (true) {
  var y = 20;
}
console.log(y); // 20 (não limitado ao bloco)

*let:* foi introduzido para fornecer uma forma de declarar variáveis com escopo de bloco, resolvendo muitas das inconsistências e comportamentos inesperados do var.
-Escopo: let tem escopo de bloco, o que significa que só é acessível dentro do bloco em que foi declarada (por exemplo, dentro de { }).
-Hoisting: Similar ao var, let é "hoisted", mas não é inicializado. Isso significa que se você tentar acessar uma variável let antes de sua declaração, você receberá um erro ReferenceError.
-Mutabilidade: A variável declarada com let pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.
ex: 
if (true) {
  let z = 30;
  console.log(z); // 30
}
console.log(z); // ReferenceError: z is not defined

let a = 40;
a = 50; // Ok, reatribuição permitida

*const:* é usado para declarar variáveis cujo valor deve permanecer constante, ou seja, não pode ser reatribuído após a inicialização.
-Escopo: Assim como let, const tem escopo de bloco.
-Hoisting: const é "hoisted" mas, assim como let, não é inicializado. A tentativa de acessar uma variável const antes da declaração resultará em um ReferenceError.
-Imutabilidade: O valor da variável declarada com const não pode ser reatribuído após a sua definição inicial. No entanto, isso não significa que o valor armazenado é imutável; se o valor for um objeto ou array, suas propriedades ou elementos podem ser modificados.
-Reatribuição e Redeclaração: Não é possível reatribuir ou redeclarar uma variável const no mesmo escopo.
ex:
const b = 60;
console.log(b); // 60
b = 70; // TypeError: Assignment to constant variable

const c = [1, 2, 3];
c.push(4); // Ok, [1, 2, 3, 4]
console.log(c); // [1, 2, 3, 4]

*Porque usar LET ao invés de VAR:*
Hoisting é um comportamento em JavaScript onde as declarações de variáveis e funções são "movidas" para o topo de seu escopo, seja ele global ou local (dentro de uma função), antes do código ser executado. Isso significa que você pode usar variáveis e funções antes de realmente declará-las no código, embora o valor das variáveis não seja necessariamente inicializado.

*Variáveis Declaradas com var*: Quando uma variável é declarada usando var, sua declaração é "erguida" ao topo do escopo, mas a inicialização (atribuição de valor) não é. Até que a linha de inicialização seja executada, a variável terá o valor undefined.

*Variáveis Declaradas com let e const*: Quando você usa let ou const, as variáveis também são "erguidas", mas não são inicializadas. Se você tentar acessar essas variáveis antes de sua declaração, você receberá um erro ReferenceError.

## Camel Case ##
É um estilo de escrita usado em programação para nomes de variáveis, funções, ou identificadores, onde a primeira palavra é escrita inteiramente em minúsculas e cada palavra subsequente começa com uma letra maiúscula, sem espaços ou símbolos entre elas.
*Como nomear uma variável*: 
var nome ='Gabrielle'
var nomeDoAluno ='Gabrielle'
Mas a primeira palavra ainda sim começa com letra minuscula
 
**NUNCA COMECE UMA VARIÁVEL COM NÚMERO-NÃO USE _ ENTRE AS PALAVRAS (SNAKE CASE - NÃO É USADO)**

*Exemplos de Camel Case*
minhaVariavel
nomeCompleto
quantidadeDeItens
calculaValorTotal

-Tipagem dinâmica - nome da variável infere os tipos de dados que ela possui.

-JS possue tipagem fraca - facilmente ele 'confunde'/'mistura' textos e números. Por exemplo, se você somar um texto com um número, em outras linguagens iria aparecer um erro mas no JS não, no máximo pode aparecer 'not a number', mas não gera erro específico. Por isso usa-se o TypeScript

-JS é case sensitive = diferencia maiúscula de minúscula


**Biblioteca Math (documentação):** já trás várias operações matemáticas prontas pra você usar no seu código.
ex:
const numero = 16;
const raizDoNumero = Math.sqrt(numero)

console.log("Raiz quadrada de 16 =", raizDoNumero);

sqrt = usado para encontrar a raiz quadrada, porém na documentação existem várias outras operações que podem ser executadas.

**Coerção de tipo de variável:** 
*Coerção explícita*: faz a conversão manualmente
*Coerção implícita*: faz a conversão automaticamente
-As vezes, quando você puxa uma informação de um prompt, por exemplo, ela vem em formato de STRING, mesmo que resposta seja um número, caso necessite de operação nesta variável, é necessário converter ela para NUMBER.Isso se chama coerção **EXPLÍCITA**
ex:
const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade?");

const idadeNumber = Number(idade);

*a função require é usada para importar módulos em Node.js*
require('readline-sync') = esse módulo permite que você faça perguntas interativas ao usuário diretamente no console e receba suas respostas de forma síncrona.
 ex2:
 console.log(String(10), typeof String(10));

 coerção feita dentro do console.log

Coerção **IMPLÍCITA**
Se o sistema precisa *somar*: 
string + number =
ela transforma(concatena) tudo em string
ex:
'22' + 10 = retorna 2210 tipo string
Isso acontece apenas para soma, outras operações *(subtração, divisão, multiplicação, etc)* ele faz o oposto e transforma tudo em number e faz a operação.
ex:
10 - "5" = 5
2 + 3 + 4 + '5' = 9 + '5' = 95 string
'5' + 2 + 3 + 4 = 5234 string

-até aqui, exemplos práticos, *aula 06*

**OPERAÇÕES LÓGICAS**
Igualdade '==' ou '==='
Diferença '!=' ou '!=='
(usando '===' ou '!==' ele compara não só o conteúdo da variável, mas também se são do mesmo'typeof', fazendo a comparação ser mais eficaz, melhor prática)
Maior/Maior ou igual > / >=
Menor/Menor ou igual < / <=

*Truthy e Falsy* 
Tudo que é considerado dentro de um if, ou em comparações em geral,verdadeiro ou falso
ex:
if (2){

} -verdadeiro
if({}){

} - verdadeiro (if com um objeto dentro, chaves, mesmo que vazio é verdadeiro)
if('blabla'){

} -verdadeiro - array ou string no 
if(''){

} -falso - string vazia
if(undefined){

} -falso

O que é considerado como falso no JS é o 0, undefined, null, ''(string vazia),NaN (not a number). Todos os demais valores são considerados como verdadeiros.

*Conjunções lógicas* a forma de você juntar duas operações lógicas
*&&* = and/e
*||* = or/ou
ex: 
const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)

console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

*Negação lógica* O operador *!* é usado para inverter o valor booleano de uma expressão.
ex: 
console.log(!true);
retorna = false

console.log(!!true);
dupla negação, retorna = true

console.log(!(idadePessoa1 >= 18));
entre parenteses pois primeiro ele vai analisar a variável e com o resultado vai apresentar o contrário/inverso. Ex: antes estava verificando se a pessoa era maior de idade, iria retornar 'falso', mas com a exclamação verifica o contrário, verifica se a pessoa é menor de idade, então o resultado seria 'verdadeiro'.

*ESTRUTURA DE CONTROLE DE FLUXO:*
É um conjunto de instruções que determina a ordem em que o código é executado, permitindo que seu programa tome decisões, repita ações ou siga diferentes caminhos com base em condições.

*Tipos de Estruturas de Controle de Fluxo:*
-Condicionais: if, else if, else, switch
-Laços de repetição (loops): for,while, do...while, for...in, for...of.
-Controle de exceção: try...catch, throw.
-Declarações de controle: break, continue, return.

**Estruturas condicionais**: por meio dela você consegue fazer uma comparação, se essa comparação der verdadeiro você executa uma parte do código, se a execução der falso, ele executa outra parte do código.

- if / else if / else: Usado para executar código condicionalmente, dependendo de uma expressão booleana.
- switch: Usado para executar diferentes blocos de código com base no valor de uma expressão.
Exemplos em: *aula-07*

**Estrutura Repetição**:
Ela permite que um determinado bloco de código seja repetido no fluxo do script e a quantidade de vezes.

-- AULA 8 - CONTINUAR RESUMO -- 
*Laços condicionais (while/do-while)* são considerados estruturas de repetição não controlada. Não consegue saber quantas vezes ela vai repetir. 
É usada quando você precisa repetir algo até obter a 'resposta' ou 'ação' necessária, mas não consegue saber a quantidade exata. 

-While: mais utilizado
'enquanto' determinada condição for x execute o código que está dentro do while

-Loop não pode ser infinto. As vezes você muda a variável mas não muda a variável da condição (de dentro do while), se não fica em loop infinito. 

-Pesquisar pré e pós incrementos.

-Loop com contador
Do e Do while
-- FIM AULA 08 --

-- Aula 09 --

Diferença entre laços numéricos e laços condicionais:
-Nos laços condicionais, enquanto aquela condição não for satisfeita, ele vai continuar repetindo. Já nos laços numéricos, você sabe quantas repetições serão feitas e você pode controlar isso. 

For = estrutura de repetição controlada

for = omitir parametros

i só existe dentro do scopo do for, dá pra criar a variável dentro do for

ARRAY:
Dentro da programação, existem duas grandes categorias de variaveis:
-tipos primitivos: number, string, boolean
-estruturas de dados: arrays, maps, objects, etc. Pode criar outras estururas a partir dessas, exemplo: fila (stack) ou pilha (quill).

A mais comum é arrays

Array são estruturas de dados que nos permitem guardar coleções de dados em uma mesma variável.
São estruturas que guardam vários dados de formas estruturadas.
Array guarda isso em uma espécie de coleção ordenada, da forma que você coloca no array ele fica nessa ordem, não muda. 

Métodos para array - ver na documentação w3schools

Slide - fatiamento de um array
Quando você quer um 'pedaço' do array, não só um elemento, porém também não quer todos.

Push - adicionar elementos (igual no github) adc no final do array

Unshift - adc elementos no inicio do array

Pop/ Shift - remover elementos. Pop ao final e Shift no inicio

Percorrer arrays com o for
