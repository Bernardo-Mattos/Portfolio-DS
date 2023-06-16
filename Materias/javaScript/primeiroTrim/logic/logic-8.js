/* 

Escreva uma função que recebe um array de números e retorna a soma de todos os
números desse array.

*/


function somaDeArray(array){
    let red = array.reduce((acc, item	) => {
    return acc + item
  }, 0)
  return red
}

console.log(somaDeArray([10, 1, 4]))
console.log(somaDeArray([10, 50, 30]))