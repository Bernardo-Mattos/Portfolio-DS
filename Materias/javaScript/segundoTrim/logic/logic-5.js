/* 
  Escreva uma função que recebe dois números inteiros não negativos e realize a
  multiplicação deles. Porém não pode utilizar o operador de multiplicação.
*/

function multiplica(num1, num2) {
  let res = 0
  if (num1 < 0 || num2 < 0) {
    console.log('um dos numeros é negativo')
  } else {
    for (i = 0; i < num2; i++) {
      res += num1
    }
    return res
  }
}

console.log(multiplica(-3, 10))
