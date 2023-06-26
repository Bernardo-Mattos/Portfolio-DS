function segundoMaior(array) {
  array.sort(function(a, b) {
    return b - a;
  })

  return array[1]
}


var numeros = [15, 2, 10, 7, 4];
console.log(segundoMaior(numeros))