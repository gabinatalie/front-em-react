## TypeScript, POO e Browsers API ##

# JSON #
Um padrão popular na web.

**JSON:** JavaScript Objet Notation (Notação de Objetos JavaScript)
É uma formatação leve de troca de dados. Para humanos: fácil de ler e escrever. Para maquinas: fácil de interpretar e gerar. 

Embora seja inspirado nos objetos do JS, é um formato que independe de linguagem. Ultiliza convenções familiares a diferentes linguagens de programação. key/value (objeto, dicionário, record, struct...)
-Lista ordenada de valores (array, lista, vetor, sequência...)

Ex de arquivo JSON:
*a key sempre precisa estar dentro de aspas duplas*
{
  "id":1,
  "nome": "Julen Hurts",
  "posição": "Quarterback",
  "idade": 24,
  "altura": 1.85,
  "mvp": true, 
}

Vantagens do arquivo JSON:
1-Fácil interpretação/leitura e escrita/geração.
2-Maior velocidade na execução e transporte de dados.
3-Arquivo com tamanho reduzido.
4-Fácil de realizar parsing.

Principais aplicações do arquivo JSON:
1-Arquivos de configuração:
a.Configurações do VS Code
b.package.json
c. .prettierrc.json *
d. .eslintrc.json *
* duas ferramentas de formatação de código

*ESLINT*: tudo isso tem na documentação (eslint.org)
1. no terminal: npm install eslint --save-dev || -D (significa que essa biblioteca funciona apenas no momento de desenvolvimento, não vai pada produção, para o browser, usado sempre nesses casos)
2. para configurar o eslint com a sua padronização específica, após instalado, no terminal: npx eslint --init
*npx* vem junto com o npm e serve para executar scripts pré prontos que foram gerados quando a gente isntala a biblioteca. 
Coloca as configurações necessárias e ao final ele pergunta 'Qual formato você quer configurar o arquivo', se colocar JSON. Ele gera um arquivo em JSON onde você pode alterar as configurações padrões principais.

As vezes essas configurações podem ir de contrário ao que está pré-formatado no prettier. Para resolver isso, é só dentro do porjeto, você criar um arquivo *.prettirerrc.json*, dentro desse arquivo, assim que forem apertas as { } ele vai te dar todas as opções do que já está formatado no prettier em boolean, então é só alterar para o desejado. No JS, o objeto pode ter a virgula após a última linha, porém no prettier não, só pode colocar vírgula ao final, se tiver algo para ser passado na próxima linha. 

eslint = prettier tem que estar formatados iguais. 

CONFIGURAÇÕES DE JSON: exemplos
"semi":true é o ; ao final do código já por padrão
"singleQuoted" = aspas simples
"no-unused-vars" = 'warn' ele te avisa se tiver alguma variável criada que não esteja dendo usada

2-A transferência de dados entre aplicações: API.

Cliente (front-end) faz um *request* para o Server
O server retorna uma *response* para o cliente.

Se o *request* for do tipo *get*, a *response* do servidor, dentro do body, ela trará a informação solicitada dentro de um JSON.  
Se o *request* for do tipo *post*, dentro dele também a informação passada também estará dentro de um JSON. 

Lidando com arquivo JSON no JavaScript: **exemplos - aula 14**
1.Lendo um arquivo JSON
Quando lê um arquivo JSON, você tem um buffer dos dados. É necessário converte-lo.

2.Convertando JSON, em formato de string para um objeto

3.Convertendo um objeto do JS em um JSON (string)