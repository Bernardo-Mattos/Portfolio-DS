function calculateCombinations(numItems, numOptions) {
  const totalCombinations = Math.pow(numOptions, numItems) // Faz a operação multiplicando o número de itens por opções
  return totalCombinations
}

// Exemplo de uso
console.log(calculateCombinations(2, 5)) 
/*
vai retornar 25 pois:

---   ---
 5  .  5   = 25
*/

console.log(calculateCombinations(4, 5))
/*
vai retornar 625 pois:

---   ---  ---   ---
 5  .  5  .  5  .  5  = 625   
*/