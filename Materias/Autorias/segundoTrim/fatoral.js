function calculateFactorial(number) {
  if (number < 0) {
    return "Digite um número inteiro positivo válido."
  }

  let factorial = 1
  for (let i = 1; i <= number; i++) {
    factorial *= i
  }

  return `O fatorial de ${number} é ${factorial}.`
}

// Teste a função com diferentes números:
console.log(calculateFactorial(5)); // Exemplo: fatorial de 5 é 120
console.log(calculateFactorial(10)); // Exemplo: fatorial de 10 é 3628800
console.log(calculateFactorial(-3)); // Exemplo: Digite um número inteiro positivo válido.