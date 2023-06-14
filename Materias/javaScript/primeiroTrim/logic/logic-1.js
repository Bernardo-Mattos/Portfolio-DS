function comparaNumeros() {
  var num1 = prompt("Digite o primeiro número:")
  var num2 = prompt("Digite o segundo número:")

  if (num1 > num2) {
    return "O primeiro número é maior"
  } else {
    return "O segundo número é maior ou igual ao primeiro"
  }
}

console.log(comparaNumeros())