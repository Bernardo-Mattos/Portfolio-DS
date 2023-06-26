/*
  Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento
  que repetirá, enquanto o segundo será o número de vezes que haverá repetição.
  Um array serpa retornado.
  Exemplo:
  repetir(“teste”, 2 ) // retorna [“teste”, “teste”]
  repetir( 4, 3 ) // retorna[4 ,4, 4]
*/

function retornaArray(val, rep) {
  let array = []
  for (i = 0; rep > i; i++) {
    array.push(val)
  }
  return array
}

console.log(retornaArray('teste', 2))
console.log(retornaArray(4, 3))
