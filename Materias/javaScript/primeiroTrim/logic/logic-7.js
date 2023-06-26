/*
  Crie uma função que recebe um array de elementos e retorne um array somente
  com os números presentes no array recebido como parâmetro.
  Exemplo:
  filtro([“Js”, 2, “hoje”, 4, 5, 7, “teste”] // retorno [2,4,5,7]
  filtro([“teste”,”tentativa”] // retorno []
*/

function filtro(array){
  return array.filter(itens => typeof itens === 'number')
}

console.log(filtro(['js', 2, 'hoje', 4, 5, 6,'teste']))
console.log(filtro(['teste','tentativa']))
