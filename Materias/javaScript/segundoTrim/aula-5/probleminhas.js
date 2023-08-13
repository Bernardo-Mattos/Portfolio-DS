// primeira

function triangulo (base, altura){
    return (base * altura) / 2;
}

console.log(triangulo(2,2))

// segunda

function numeros(numero){
    return numero.reverse()
}


//terceira 

function vogais(palavra){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let quantidade = 0
    for (let i = 0; i < palavra.length; i++){
        if(vogais.includes(palavra[i])){
            quantidade++
        }
    }
    return quantidade
}

console.log("a palavra mesa tem: ", vogais('mesa'), 'vogais')