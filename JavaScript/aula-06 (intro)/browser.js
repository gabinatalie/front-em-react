const idade = prompt("Qual é a sua idade?");

console.log("O usuário tem", idade, "anos de idade");

// esse código quando você abrir a página do navegador que ele está referenciado (html) irá aparecer uma janela (está oculto no prompt o window - ex: window.prompt pode usar só promt). Já no Node.js não tem 'janela' apenas o terminal, por isso se rodar a mesma coisa direto no Node.js, irá dar erro 'prompt is not defined'
//para que isso funcione, é necessário instalar uma biblioteca no projeto.
//No terminal, dentro da pasta 'JavaScript', que é a pasta que contém a pasta 'aula-06' do projeto, foi digitado:
// npm install readline-sync
//npm (biblioteca) + instalar + readline-sync (nome da biblioteca que você vai isntalar)
//readline-sync = biblioteca usada para ler os dados do usuário

