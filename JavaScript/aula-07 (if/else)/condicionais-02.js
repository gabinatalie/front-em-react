// switch case: muito útil quando a sua variável possue valores específicos

const permissoes = "admin"; // 'aluno' || 'professor' || 'admin'
switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
    break
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercícios");
    break
  case "admin":
    console.log("Você pode fazer o que quiser com o sistema");
    break
   default:
   console.log('Não sei quem você é no sistema!')
}
// switch vem de chave seletora, procurando um caso específico
// default = como se fosse o else = 'se não for nenhuma das opções='

// ! No Switch Case ele sempre vai executar todos os cases, mesmo que encontre a o que busca no primeiro. Ex: mesmo se eu colocar a permissão 'aluno', ele me da o log das três permissões no terminal. Por isso sempre que for usar o Case Switch é necessário adicionar um 'break' a cada case. Quando se inclue o break, ele para a cada log até ele encontrar o que se enquadra e devolve apenas ele no terminal.