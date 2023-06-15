

let prm = prompt('digite um valor booleano ou um valor numerico')

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