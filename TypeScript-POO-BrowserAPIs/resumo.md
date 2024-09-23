## TypeScript, POO e Browsers API

# JSON

Um padrão popular na web.

**JSON:** JavaScript Objet Notation (Notação de Objetos JavaScript)
É uma formatação leve de troca de dados. Para humanos: fácil de ler e escrever. Para maquinas: fácil de interpretar e gerar.

Embora seja inspirado nos objetos do JS, é um formato que independe de linguagem. Ultiliza convenções familiares a diferentes linguagens de programação. key/value (objeto, dicionário, record, struct...)
-Lista ordenada de valores (array, lista, vetor, sequência...)

Ex de arquivo JSON:
_a key sempre precisa estar dentro de aspas duplas_
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
c. .prettierrc.json _
d. .eslintrc.json _

- duas ferramentas de formatação de código

_ESLINT_: tudo isso tem na documentação (eslint.org)

1. no terminal: npm install eslint --save-dev || -D (significa que essa biblioteca funciona apenas no momento de desenvolvimento, não vai pada produção, para o browser, usado sempre nesses casos)
2. para configurar o eslint com a sua padronização específica, após instalado, no terminal: npx eslint --init
   _npx_ vem junto com o npm e serve para executar scripts pré prontos que foram gerados quando a gente isntala a biblioteca.
   Coloca as configurações necessárias e ao final ele pergunta 'Qual formato você quer configurar o arquivo', se colocar JSON. Ele gera um arquivo em JSON onde você pode alterar as configurações padrões principais.

As vezes essas configurações podem ir de contrário ao que está pré-formatado no prettier. Para resolver isso, é só dentro do porjeto, você criar um arquivo _.prettirerrc.json_, dentro desse arquivo, assim que forem apertas as { } ele vai te dar todas as opções do que já está formatado no prettier em boolean, então é só alterar para o desejado. No JS, o objeto pode ter a virgula após a última linha, porém no prettier não, só pode colocar vírgula ao final, se tiver algo para ser passado na próxima linha.

eslint = prettier tem que estar formatados iguais.

CONFIGURAÇÕES DE JSON: exemplos
"semi":true é o ; ao final do código já por padrão
"singleQuoted" = aspas simples
"no-unused-vars" = 'warn' ele te avisa se tiver alguma variável criada que não esteja dendo usada

2-A transferência de dados entre aplicações: API.

Cliente (front-end) faz um _request_ para o Server
O server retorna uma _response_ para o cliente.

Se o _request_ for do tipo _get_, a _response_ do servidor, dentro do body, ela trará a informação solicitada dentro de um JSON.  
Se o _request_ for do tipo _post_, dentro dele também a informação passada também estará dentro de um JSON.

Lidando com arquivo JSON no JavaScript: **exemplos - aula 14**
1.Lendo um arquivo JSON
Quando lê um arquivo JSON, você tem um buffer dos dados. É necessário converte-lo.

2.Convertando JSON, em formato de string para um objeto

3.Convertendo um objeto do JS em um JSON (string)

# API: introdução

API: Application Programming Interface (Interface de Programaçãode Aplicações)

Hoje em dia é muito comum que diferentes aplicações consumam dados pela internet, muitas vezes dados providenciados por terceiros. Por exemplo, um aplicativo de entrega de alimentos pode usar dados de geolocalização do Goodle para localizar restaurantes próximos ao usuário e exibir a rota percorrida pelo entregador.
Como essas aplicações podem estar rodando em diferentes plataformas e linguagens de programação, é importante estabelecer uma 'linguagem comum' para que todos consigam consumir esses dados.
A API é uma interface que nos permite utilizar funcionalidades/recusros de terceiros, seguindo um conjunto de definições/contratos estabelecidos pelo terceiro.

-Exemplos:
Login a partir de uma rede social
Pagamento online

A API acaba facilitando a vida dos programadores pois reduz o tempo de desenvolvimento de novas aplicações

_Tipos de APIs_

1. Públicas ou abertas
2. Privadas ou internas
3. APIs de Parceiros

_Protocolos de APIs (contratos para utilização)_
-Os protocolos servem para padronizar a troca de dados entre a aplicação e a API.
-Existem diferentes protocolos de APIs, como RPC, SOAP, GraphQL e REST.
-Rest é o padrão mais comum, GraphQL também está crescendo bastante.
-REST (Representational State Transfer) se baseia em seis restrições. Caso uma API respeite essas 6 restrições, ela é considerada uma API RESTful.

**REST**

1. Ter uma arquitetura formada por clientes, servidores e recursos com solicitações gerenciadas por HTTP
2. Estabelecer uma comunicação _stateless_ entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e todas as solicitações são separadas e desconectadas.
3. Armazenar dados em cache para otimizar as interações entre cliente e servidor. (Memória cache: é uma memória de curta duração, serve para guardar dados, de modo que a transferência ocorra de maneira mais rápida.)
4. Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado.
5. Ter um sistema em camadas que organiza os tipos de servidores (responsáveis pela segurança, pelo carregamento de carga e assim por diante) envolvidos na recuperação das informações solicitadas em hierarquias que o cliente não pode ver. - baixo nível - back-end. Mais voltado a parte de construção da API.
6. Possibilitar código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionalidade disponível ao cliente.

_Características de APIs REST_

- Os recursos são solicitados/enviados via protocolo HTTP.

- URI Base(Base URL): Várias APIs fornecem um 'endereço base'. Todas as suas requisições incluirão esse endereço, e ao final dele nós colocamos detlhes específicos para cada um dos recursos disponíveis.

-Formato do dado/recurso: Algumas APIs possuem formatos fixos de dados. Outras permitem que você escolha. É comum, por exemplo, que uma API permita que você escolha entre JSON, XML, CSV e/ou outros formatos.

-Schemas: É bastante comum que as APIs disponibilizem um 'modelo' genérico de como será formatado o seu JSON para que os desenvolvedores saibam quais campos esperar e quais tipos de dados serão possíveis para cada campo. Por exemplo:
{
'nome': string,
'pontuação':integer
}

_Como utilizar?_
-Autenticação: Outro aspecto importante é a autenticação. Enquanto algumas APIs são grátis/abertas, outras são pagas. Ainda temos algumas híbridas (é possível acessas gratuitamente certos recursos, ou consumir um certo volume de dados, e acima disso você deverá pagar).

a. Os dois modelos mais comuns de autenticação:
i. Chave: ao fazer seu registro, você recebe uma chave que deverá ser passada na requisição.
ii. OAuth: um esquema um pouco mais complexo onde são combinados códigos de autorização, identificação do cliente e segredo do cliente em um POST, e o servidor cria uma sessão por tempo limitado e fornece o ID da mesma. APIs de gigantes da internet (como Google e Facebook) costumam usar esse modelo.

-Endpoint: A URL completa que deve ser acessada a fim de obter um recurso específico. Além da URL base, mas também com os dados que você necessida acessar. Base URL + dados a serem acessados = endpoint url.
OBS: sempre que em uma URL tiver '?' significa que a URL acabou e a partir dali são parâmetros que serão acessados = Parametros Querie.

Exemplos de APIs de Terceiros:
**Gratuitas: para testar**
-PokéAPI - pokeapi.co
-Nasa - api.nasa.gov
-GitHub - api.github.com/users/nomedousuario
pesquisar no google: public api github - abre um repositório de várias apis publicas.
-Google Maps - developers.google.com/maps
-NY Times - developer.nytimes.com
-Riot Games - developer.riotgames.com/apis
-Unsplash - unsplash.com/developers
-Deck of Cards - deckofcardsapi.com
-Futebol - football-data.org
-Spotify - developers.spotify.com
-Youtube - developers.google.com/youtube
-QR Code - goqr.me/api
-Space X - api.spacexdata.com/v5/launches/latest
-HTTP Dog - http.dog
-Disney - disneyapi.dev
-Animes - animechan.vercel.app
-Open Weather - openweathermap.org/api
-Dicionario - dictionaryapi.dev

_Como testas APIs?_

1. Navegador
   Só consegue testar quando a requisição é do tipo GET
2. Software
   Outros tipos de requisições, é necessário softwares. Existem duas opções: Insomnia e Postman.

_Outros tipos de APIs_
-Existem APIs que não funcionam via HTTP (REST), existem APIs que facilitam a utilização de alguma linguagem de programação.

-APIs do Browser: Utilizando o JS para interarir com páginas WEB.
API serve para facilitar o desenvolvimento.

1. Documento API - Document:
   Faz parte do DOM (Document Object Model), que permite a manipulação e interação com o conteúdo HTML e a estrutura de uma página web. Através dela, é possível acessar, modificar, criar ou deletar elementos no documento HTML. Permite acessar e modificar elementos HTML diretamente, como adicionar ou remover classes, modificar atributos ou alteror o conteúdo textual. Permite associar eventos(como cliques ou teclas pressionadas) a elementos da página, facilitando a interatividade.

2. Notifications API:
   Permite que os navegadores exibam notificações ao usuário, mesmo que o site esteja minimizado ou não esteja ativo. As notificações são exibidas fora do conteúdo da página, geralmente no sistema operacional, na área de notificações do usuário. Essas notificações podem ser clicáveis, permitindo interações como abrir uma página específica ao clicar na notificação. Requer que o usuário conceda permissão.

- no console do browser, ou diretamente no JS do seu código: Notification.requestPermission() - para conferir se foi aceita ou não: Notification.permission - 'accepted' or 'denied'

3. Web Storage API :
   Permite que dados sejam armazenados localmente no navegador do usuário de forma persistente ou temporária. Existem duas variantes principais:
   -Local Storage: Os dados persistem mesmo após o navegador ser fechado e reaberto. Para armazenar dados que devem persistir entre sessões de navegação.
   -Session Storage: Os dados são removidos assim que a sessão de navegação é fechada. Para armazenar dados temporários enquanto a aba ou janela estiver aberta.
   Armazenar dados dentro do browser, guarda os dados somente dentro do navegador específico que ele usa naquele momento, se fechar, perde o que foi guardado.
4. Fetch API:
   É utilizada para fazer requisições HTTP assíncronas. Permite fazer requisições GET, POST, PUT, DELETE e outros métodos HTTP. Utiliza a API de Promisses do JS, facilitando a escrita de código assíncrono e manipulação de respostas. Permite lidar com grandes respostas de forma mais eficiente.

**Métodos de Requisições**
_GET_: Utilizado para solicitar dados de um servidor. Sem altera-la.
_POST_: Utilizado para enviar dados ao servidor, geralmente para criar ou adicionar novos recursos. Os dados são incluidos no corpo da requisição.
_PUT_: Utilizado para atualizar um recurso existente no servidor. Ele geralmente substitui completamente os dados atuais do recurso com os novos fornecidos.
_PATCH_: Utilizado para atualizar recursos, mas, ao contrário de PUT, ele atualiza apenas campos específicos, sem substituir todo o recurso.
_DELETE_: Utilizado para remover um recurso do servidor. Ele exclui permanentemente os dados no servidor.
_OPTIONS_: Utilizado para descrever as opções de comunicação que o servidor aceita. Ele retorna informações sobre os métodos HTTP permitidos para o recurso solicitado. A resposta pode indicar que GET, POST, PUT e DELETE são suportados, por exemplo.
_HEAD_: Funciona de forma semelhante ao GET, mas a diferença é que ele não retorna o corpo da resposta, apenas os cabeçalhos. Isso é útil para verificar se um recurso existe sem baixar todo o conteúdo.
_CONNECT_: Utilizado para iniciar uma conexão de túnel com o servidor, geralmente usado em comunicações seguras (como com HTTP).
_TRACE_: Utilizao para realizar um loop-back de teste, retornando a requisição recebida ao cliente. Isso é útil para fins de diagnóstico, como verificar se os dados da requisição foram modificados no caminho.

# Fetch API - browser API

Só roda, se estiver rodando o JS no browser, não roda do Node.js

Função Fetch = Promisse
Ou seja, é uma função assíncrona, leva um tempinho para retornar

No fetch() o primeiro parâmetro sempre é a URL da API, mas é possível passar um segundo parâmetro que é um objeto, onde é possível passar um body, um cache, uma header, entre outros. ( shit + espaço mostra as opções)

Fetch por padrão sempre faz uma requisição do tipo GET - para alterar o tipo da requisição, passa no parâmetro do objeto - method
No body do fetch, não aceita um objeto do JS, aceita apenas STRING.
