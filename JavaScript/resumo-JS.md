# Node.js

_O que é?_ É uma tecnologia runtime de código aberto(open-source) que permite a execução de JavaScript (JS) no lado do servidor (backend), fora do navegador. Isso significa que você pode escrever todo o código de uma aplicação web (front e back) usando JS, isso apenas graças ao Node, pois antes JS só era usado para desenvolvimento front. Isso também significa que você pode usar JS para desenvolver a lógica do lado do servidor, manipulação de banco de dados, manipulação de arquivos, criação de APIs, e muito mais.
_Event-Driven:_ Programação orientada a eventos que melhora a eficiência em aplicações que exigem alta performance, como servidores web.
_Single-Threaded:_ Embora seja single-threaded, Node.js usa operações assíncronas para realizar tarefas de I/O de forma eficiente.

**Gerenciador de pacotes do Node: npm**
É um gerenciador de pacotes que é baixado e empacotado junco com o Node.js

# JavaScript

**ctrl + aspas = abre o terminal**
**JS não é necessário colocar ';' ao fim da linha, o prettier coloca automaticamente por padronização, mas não é obrigatório. Caso queira não usar como padrão, da pra arrumar no prettier**

_'Console.log'_

-É uma função do JS usada para exibir mensagens ou valores no console do navegador ou do ambiente em desenvolvimento.
É uma ferramenta muito útil para depuração, pois permite que você veja o que está acontecendo no código enquanto ele é executado.
-É mais usado durante a fase de desenvolvimento e teste. Em produção, pode ser útil manter o console.log() para logs de depuração, mas você pode considerar bibliotecas de logging mais robustas para ambientes de produção.
-Não afeta a lógica do código, apenas exibe informações no console. Porém, muitas chamadas a console.log() podem afetar o desempenho e poluir o console, por isso é importante usá-lo com moderação.
ex:
console.log(nome) - vai mostrar a informação salva na variável nome

console.log(nome, typeof nome) - mostra a info e qual tipo de variável é

_string_ = texto, usando entre ''
_number_ = inteiros, positivos, negativos, decimais, tudo.
_boolean_ = true or false

## Variáveis

-No JavaScript (e em outras linguagens de programação), uma variável é um "espaço" na memória que é usado para armazenar valores que podem ser reutilizados ou manipulados ao longo do código. Pense em uma variável como uma "caixa" que pode conter dados, como números, textos, objetos, entre outros. No JavaScript, você pode declarar variáveis usando três palavras-chave principais:
'var', 'let', e 'const'

_var:_ variável mais antiga, porém é considerada menos previsível em comparação as outras duas.
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

_let:_ foi introduzido para fornecer uma forma de declarar variáveis com escopo de bloco, resolvendo muitas das inconsistências e comportamentos inesperados do var.
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

_const:_ é usado para declarar variáveis cujo valor deve permanecer constante, ou seja, não pode ser reatribuído após a inicialização.
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

_Porque usar LET ao invés de VAR:_
Hoisting é um comportamento em JavaScript onde as declarações de variáveis e funções são "movidas" para o topo de seu escopo, seja ele global ou local (dentro de uma função), antes do código ser executado. Isso significa que você pode usar variáveis e funções antes de realmente declará-las no código, embora o valor das variáveis não seja necessariamente inicializado.

_Variáveis Declaradas com var_: Quando uma variável é declarada usando var, sua declaração é "erguida" ao topo do escopo, mas a inicialização (atribuição de valor) não é. Até que a linha de inicialização seja executada, a variável terá o valor undefined.

_Variáveis Declaradas com let e const_: Quando você usa let ou const, as variáveis também são "erguidas", mas não são inicializadas. Se você tentar acessar essas variáveis antes de sua declaração, você receberá um erro ReferenceError.

## Camel Case

É um estilo de escrita usado em programação para nomes de variáveis, funções, ou identificadores, onde a primeira palavra é escrita inteiramente em minúsculas e cada palavra subsequente começa com uma letra maiúscula, sem espaços ou símbolos entre elas.
_Como nomear uma variável_:
var nome ='Gabrielle'
var nomeDoAluno ='Gabrielle'
Mas a primeira palavra ainda sim começa com letra minuscula

**NUNCA COMECE UMA VARIÁVEL COM NÚMERO-NÃO USE \_ ENTRE AS PALAVRAS (SNAKE CASE - NÃO É USADO)**

_Exemplos de Camel Case_
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
_Coerção explícita_: faz a conversão manualmente
_Coerção implícita_: faz a conversão automaticamente
-As vezes, quando você puxa uma informação de um prompt, por exemplo, ela vem em formato de STRING, mesmo que resposta seja um número, caso necessite de operação nesta variável, é necessário converter ela para NUMBER.Isso se chama coerção **EXPLÍCITA**
(baixei na biblioteca npm - instalar no VSCode)
ex:
const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade?");

const idadeNumber = Number(idade);

_a função require é usada para importar módulos em Node.js_
require('readline-sync') = esse módulo permite que você faça perguntas interativas ao usuário diretamente no console e receba suas respostas de forma síncrona.
ex2:
console.log(String(10), typeof String(10));

coerção feita dentro do console.log

Coerção **IMPLÍCITA**
Se o sistema precisa _somar_:
string + number =
ela transforma(concatena) tudo em string
ex:
'22' + 10 = retorna 2210 tipo string
Isso acontece apenas para soma, outras operações _(subtração, divisão, multiplicação, etc)_ ele faz o oposto e transforma tudo em number e faz a operação.
ex:
10 - "5" = 5
2 + 3 + 4 + '5' = 9 + '5' = 95 string
'5' + 2 + 3 + 4 = 5234 string

-até aqui, exemplos práticos, _aula 06_

**OPERAÇÕES LÓGICAS**
Igualdade '==' ou '==='
Diferença '!=' ou '!=='
(usando '===' ou '!==' ele compara não só o conteúdo da variável, mas também se são do mesmo'typeof', fazendo a comparação ser mais eficaz, melhor prática)
Maior/Maior ou igual > / >=
Menor/Menor ou igual < / <=

_Truthy e Falsy_
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

_Conjunções lógicas_ a forma de você juntar duas operações lógicas
_&&_ = and/e
_||_ = or/ou
ex:
const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)

console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

_Negação lógica_ O operador _!_ é usado para inverter o valor booleano de uma expressão.
ex:
console.log(!true);
retorna = false

console.log(!!true);
dupla negação, retorna = true

console.log(!(idadePessoa1 >= 18));
entre parenteses pois primeiro ele vai analisar a variável e com o resultado vai apresentar o contrário/inverso. Ex: antes estava verificando se a pessoa era maior de idade, iria retornar 'falso', mas com a exclamação verifica o contrário, verifica se a pessoa é menor de idade, então o resultado seria 'verdadeiro'.

_ESTRUTURA DE CONTROLE DE FLUXO:_
É um conjunto de instruções que determina a ordem em que o código é executado, permitindo que seu programa tome decisões, repita ações ou siga diferentes caminhos com base em condições.

_Tipos de Estruturas de Controle de Fluxo:_
-Condicionais: if, else if, else, switch
-Laços de repetição (loops): for,while, do...while, for...in, for...of.
-Controle de exceção: try...catch, throw.
-Declarações de controle: break, continue, return.

**Estruturas condicionais**: por meio dela você consegue fazer uma comparação, se essa comparação der verdadeiro você executa uma parte do código, se a execução der falso, ele executa outra parte do código.

- if / else if / else: Usado para executar código condicionalmente, dependendo de uma expressão booleana.
- switch: Usado para executar diferentes blocos de código com base no valor de uma expressão.
  Exemplos em: _aula-07_

**Estrutura Repetição**:
Ela permite que um determinado bloco de código seja repetido no fluxo do script e a quantidade de vezes.

_aula 08_
_Laços condicionais (while/do-while)_ são considerados estruturas de repetição não controlada. Não consegue saber quantas vezes ela vai repetir.
É usada quando você precisa repetir algo até obter a 'resposta' ou 'ação' necessária, mas não consegue saber a quantidade exata.

-While: mais utilizado
'enquanto' determinada condição for x execute o código que está dentro do while

-Loop não pode ser infinto. As vezes você muda a variável mas não muda a variável da condição (de dentro do while), se não fica em loop infinito.

-Pesquisar pré e pós incrementos.

-Loop com contador
Do e Do while

Diferença entre laços numéricos e laços condicionais:
-Nos laços condicionais, enquanto aquela condição não for satisfeita, ele vai continuar repetindo. Já nos laços numéricos, você sabe quantas repetições serão feitas e você pode controlar isso.

**FOR**
For = estrutura de repetição controlada

É como estar assosiaco a variável 'i' (iterador/iterator)

Estrutura do for:
for (expressão 1; expressão 2; expressão 3;) {
o escopo do for
}

expressão 1: inicialização da variável de controle (controle quantas vezes vai acontecer)
expressão 2: condição de permanencia do for
expressão 3: incremento da variável de controle

_o for permite usar a variável dentro do escopo, sem ter definido ela fora do bloco_

-'i' só existe dentro do scopo do for - fora ela da 'undefined'

É possível omitir parâmetros no FOR:

Para percorrer uma string ou um array utilizar '.length'

**ARRAY**
Dentro da programação, existem duas grandes categorias de variáveis:
-tipos primitivos: number, string, boolean
-estruturas de dados: arrays, maps, objects, etc.
Pode criar outras estururas a partir dessas, exemplo: fila (stack) ou pilha (quill).

-Array são estruturas de dados que nos permitem guardar coleções de dados em uma mesma variável.
São estruturas que guardam vários dados de formas estruturadas.
Array guarda isso em uma espécie de coleção ordenada, da forma que você coloca no array ele fica nessa ordem, não muda.

-Métodos para array: alguns exemplos
Vários métodos de array integrados (por exemplo, join(), slice(), indexOf(), etc.) levam em consideração o valor da propriedade de um array .length quando são chamados.

_Slice()_ :fatiamento de um array
Quando você quer um 'pedaço' do array, não só um elemento, porém também não quer todos.

_Push()_: adicionar elementos (igual no github) adc no final do array (oposto - pop)

_Unshift()_:adc elementos no inicio do array (oposto - shift)

_Pop()/ Shift()_ - remover elementos. Pop ao final e Shift no inicio

*.length*Percorrer arrays com o for

## Funções

-Função/procedimento: Blocos de código que pode ser reaproveitado, sem ficar repetindo o mesmo código.

_Conceito DRY_
Don't repeat yourself.
Por meio das funções é implementado o princípio DRY.

Exemplos de funções:
-Number() - Converte qualquer tipo de dado para número
-parseInt () - Converte uma variável para o tipo 'inteiro'
-parseFloat() - Converte uma variável para o tipo float
-isNan() - retorna um booleando informando se o conteúdo da variável é NaN (true) ou false.

Essas funções já existem dentro do próprio JavaScript, mas você pode criar suas próprias funções.

_Criando funções:_ -funcao-1.js

sintaxe: function nomeDaFuncao()
segue padrão Camel Case
Após criar a função, você precisa chamar a função.
Quando você cria um parâmetro para a função, ele precisa ser definido na chamada dessa função.

-Template string: Quando você injeta usando ${} a variável ou um código HTML, ou de texto, direto pra dentro da string.
Normalente dentro de uma função você usa o 'return' para retornar um resultado e utiliza-lo posteriormente

Você pode passar um parâmetro default (padrão) para uma variavel da função, caso não seja chamado nenhum parâmetro especifico, ele retorna o default ao invés de retornar undefined

_Funções Anônimas_ - funcao-2.js
Ao invés de dar um nome à função, você cria direto uma variável e chama a função dentro da própria variável

JS implementa o conceito de _First Class Function_
É um paradigma implementado na linguagem. Ele trata funções como se fossem variáveis.

_Arrow Functions_ - funcao-3.js
Muito utilizada, ele substitui a palavra function por =>, onde recebe uma entrada () processa e entrega o escopo desejado, não necessita do 'return' pois ele sempre vai retornar algo.
Porém é usado apenas se o escopo for simples de uma única linha, pois ele vai fazer apenas aquela única execução, caso for ter alguma lógica, ou fazer mais de uma coisa, nessecita das { } para o escopo

_Object Literal (objetos)_
Diferente do array que recebe vários conteúdos dentro de [], o objeto é mais completo ainda, pode receber variáveis, outros arrays, funções, dentro de { } - para nomenclatura do objeto seguir Camel Case

você pode alterar o conteúdo do objeto adicionando nova chave, deletando uma existente, alterando o valor de uma chave que já existe. E consegue também selecionar um atributo especifico dentro de uma chave específica.

sintaxe simplificada adiciona uma variável e uma atributo que tenham o mesmo nome, usando apenas uma vez.

## Funções de Alta Ordem

_Frist Class Function_
Quando em uma linguagem de programação a função é tratada como qualquer outra variável
Por exemplo, uma função pode ser passada como parâmetro para outra função, assim como pode ser retornada por uma função e esse retorno pode ser atribuído a uma variável.
_High Order Function_
É uma função que recebe outra função como parâmetro/argumento, ou uma função que retorna outra função.

**Função de Alta Ordem de Array**
São funções que já existem/estão implementadas dentro do JavaScript, dentro dos arrays.
São métodos dos arrays, que recebem funções como parametros. Métodos são uma função que está dentro do objeto.
Principais: exemplos: aula 11 e 12
-forEach()
-find()
-findIndex()
-every()
-some()
-filter() _ aula 12
-map() _ aula 12
-reduce() * aula 12
*as mais usadas

## Programação Assíncrona - aula 13

Na programação existem duas abordagens para processamento de dados:
-Programação Paralela
-Programação Assíncrona - JS
No JS ele usa programação assíncrona para conseguir extrair o máximo possível do hardware, da thread (no processador existem múltiplas threads, vários núcleos de processamento), o JS utiliza do assincronimso dentro dessa thread para lidar com esses dados.

_Programação Pararela:_
Vai pegar o código e dividir em multiplos núcleos/threads de processamento, e cada thread vai estar processando uma parte do código de forma simultânea/paralela.
(Java, C++, Phyton) - programação paralela é bem difícil, pois normalmente o código depende de um passo anterior.
Por isso vem a PA
_Programação assíncrona:_
ex: no código, você está tentando acessar/ler um arquivo ou diretório, isso leva um certo tempo para acontecer, o JS não fica parado sem realizar outra tarefa enquanto essa leitura acontece. Se não você ficaria com o seu código congelado até finalização daquela ação. O JS continua processando coisas que não dependem dessa leitura até que ela seja finalizada, só então ele retorna nela com o resultado ou o próximo processamento a partir daquela leitura.
Processamentos que ficam acontecendo em pararelelo, a parte, enquanto o resto do sistema continua rodando/funcionando.

No JS a programação assíncrona pode ser aplicada de três formas:

-Por **callbacks** (função || chamada de retorno):
Registra uma terafa - vai executando o restante - quando finalizar o processo da tarefa, a função retorna para ela e dá continuidade.

-Por **promises** (promessas):
Pode ser cumprida ou não. JS cria um objeto que é chamado de promessa, ele pode cumprir ou não, dependendo do que for processado. A promisse é um objeto que guarda uma promessa de que algo será realizado. É útil para os casos em que estamos lidando com operações assíncronas.
A promisse estará em algum dos estados abaixo:

1. Pending: a promisse foi iniciada, mas está pendente
   2.Fullfilled: a promisse foi concretizada com sucesso
   3.Rejected: a promisse foi rejeitada, porque houve um erro.
   Exemplo de utilização: pegar dados do back-end(API)

-Resolvendo promisses utilizando **async/await**:
demonsta que é assincrono e que vai aguardar ser processado para dar continuidade.
