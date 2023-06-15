/* 
  Escreva uma função que recebe dois números inteiros não negativos e realize a
  multiplicação deles. Porém não pode utilizar o operador de multiplicação.
*/
let num1 = parseInt(prompt('digite o primeiro número'))
let num2 = parseInt(prompt('digite o segundo número'))

function multiplica(num1, num2){
  let res = 0
  for ( i = 0; i<num2; i++){
    res += num1
  }
  return res
}

if (num1 < 0 || num2 < 0 ){
  alert('um dos numeros é negativo')
} else {
  let res = multiplica(num1, num2)
  alert ('o resultado é : ' + res )
}
