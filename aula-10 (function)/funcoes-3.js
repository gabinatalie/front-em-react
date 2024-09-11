//! Arrow Functions: função seta

//principio por trás: (entrada) recebe, processa e entrega (=>){escopo = saída}
// () => {
// }

const subtrair = (numero1, numero2) => {
  return numero1 - numero2
}
//a palavra function é substituida pela seta

//vantagem: sintaxe mais curta, mais simples. É possível omitir o return, caso o escopo da função possa ser composto apenas por uma linha (que executa o retorno do valor)

const multiplicar = (numero1, numero2) => numero1 * numero2
//quando não utiliza as chaves {} ele vai retornar autamaticamente o resultado do que foi escopado. Ficando mais simples ainda, curto, limpo. Só funciona quando é uma operação única ou se não tiver nenhuma lógica antes.


//permite a omissão dos parênteses no parâmetro também, apenas para UM parâmetro.
//OBS: quando salvo, o prettier vai colocar automaticamente, para padronizar, mas se não tivesse estaria ok. 
const triploDoNumero = numero => numero *3