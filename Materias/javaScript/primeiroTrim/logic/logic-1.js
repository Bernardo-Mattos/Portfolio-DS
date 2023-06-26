/* 
Crie uma função que recebe 2 números como argumento e retorne se o primeiro é
maior ou igual ao segundo.
*/

function comparaNumeros(num1, num2) {
  if (num1 > num2) {
    return "O primeiro número é maior ou igual o segundo"
  } else {
    return "O segundo número é maior ou igual o primeiro"
  }
}

console.log(comparaNumeros(10, 15))