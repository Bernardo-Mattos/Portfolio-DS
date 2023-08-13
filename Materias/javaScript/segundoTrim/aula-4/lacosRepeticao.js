/* laços de repetição:
    - dentro do javaScript podemos usar 
    - for([inicialização], [condição], [expressão final])
    - for in || for of
*/

// for normal
console.log('---------- for ----------')

for(let i = 0; i < 4; i++){
    console.log(i)
}

// for in

console.log('---------- for in ----------')

let obj = {
    a: 1, 
    b: 2,
    c: 3
}

for(let prop in obj){
    console.log('obj.',prop, '=', obj[prop])
}

// for of

console.log('---------- for of ----------')

let iterable = [ 
    {name: 'Bernardo', admin: false},
    {name: 'Pedro', admin: false},
    {name: 'Daniel', admin: true},
]

for(const value of iterable){
    console.log(value.name)
}
