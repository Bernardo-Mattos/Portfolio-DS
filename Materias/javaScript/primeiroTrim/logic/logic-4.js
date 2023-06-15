/* 
Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).

*/

function retornaInverso(prm){
  
function verificaBooleano (prm){
  if( prm === 'true') {
   console.log(`o inverso de ${prm} é: 'false'`)
  } else{
   console.log(`o inverso de ${prm} é: 'true'`)
  }
 }
 
 function verificaNumerico (prm){
   if(prm > 0){
     console.log(`o inverso de ${prm} é ${-prm}`)
   }else{
     console.log(`o inverso de ${prm} é ${prm}`)
   }
 }
 
 if (prm === 'true' || prm === 'false' ){
   verificaBooleano(prm)
 }else if(!isNaN(prm)){
   verificaNumerico(prm)
 }else{
   console.log(`“Booelano ou Número esperados, mas o parâmetro é do tipo ${typeof(prm)}.`)
 }
}

console.log(retornaInverso(1))
console.log(retornaInverso('true'))
console.log(retornaInverso('false'))