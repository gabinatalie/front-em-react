//Quero fazer um while 5x

let contador = 0

while (contador < 5) {
  console.log(contador);
  //se só deixar assim, vai ter um loop infinito pois não altera o valor dele dentro do while, precisa:
  contador++;
  if (contador == 2) {
    //break
    continue
  }
  console.log('Depois do if...')
 
}

//executou 5x - retornou de 0 até 4
// é mais usado o for, mas é possível com o while também
//você consegue colocar uma condição para sair do loop, não é boa prática, mas é comum.
// break você força ele a sair da estrutura de repetição
// continue -  faz com que você suba pro inicio do loop, ao invés de continuar
// não é indicado usar nenhum dos dois pois quebra o fluxo do laço

