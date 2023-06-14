/* 
  Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie
  uma validação para não permitir número negativo, e quando tiver retorna uma
  mensagem de erro.
*/

function mostraIdade(){
  var age = prompt('digite a sua idade para que eu possa retornar quantos dias você ja viveu')

  if (age > 0){
    console.log('os dias são: ', age * 365)
  } else{
    console.log('digite uma idade maior que 0')
  }
}

mostraIdade();