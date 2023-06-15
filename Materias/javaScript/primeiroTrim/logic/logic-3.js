/*
Crie uma função que receba número de 1 a 12 e retorne o mês correspondente,
exemplo se colocar o número 2, o retorno deve ser “Fevereiro”.
*/ 

function retornaMes(num){
  switch(num){
    case 1:
      console.log('janeiro')
      break
    case 2:
      console.log('fevereiro')
      break
    case 3:
      console.log('março')
      break
    case 4:
      console.log('abril')
      break
    case 5:
      console.log('maio')
      break
    case 6:
      console.log('junho')
      break
    case 7:
      console.log('julho')
      break
    case 8:
      console.log('agosto')
      break
    case 9:
      console.log('setembro')
      break
    case 10:
      console.log('outubro')
      break
    case 11:
      console.log('novembro')
      break
    case 12:
      console.log('dezembro')
      break
  
    default:
      conole.log('escolha um numero de 1 - 12 seu tanso')
  }
}

console.log(retornaMes(3))