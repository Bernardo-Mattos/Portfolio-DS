let pessoasNoShow = [
  {
    nome: "João",
    portandoArmas: false,
    produtosIlegais: false,
  },
  {
    nome: "Maria",
    portandoArmas: true,
    produtosIlegais: false,
  },
  {
    nome: "Pedro",
    portandoArmas: false,
    produtosIlegais: true,
  },
]

// Função para verificar se uma pessoa pode entrar no show
function verificarPermissaoDeEntrada(pessoa) {
  if (pessoa.portandoArmas || pessoa.produtosIlegais) {
    // Enviar alerta para a delegacia mais próxima
    enviarAlertaDelegacia(pessoa.nome)
    console.log(`${pessoa.nome} não pode entrar no show`) // Pessoa não pode entrar no show
    return false
}

  console.log(`${pessoa.nome} pode entrar no show`) // Pessoa pode entrar no show
  return true
}

// Função para enviar alerta para a delegacia
function enviarAlertaDelegacia(nomePessoa) {
  // Aqui você pode implementar o código para enviar o alerta para a delegacia
  // Neste exemplo, apenas exibiremos uma mensagem de resposta
  console.log(
    "ALERTA: " + nomePessoa + " está portando armas ou produtos ilegais!"
  )
}

let pessoa1 = pessoasNoShow[0]
let pessoa2 = pessoasNoShow[1]
let pessoa3 = pessoasNoShow[2]

console.log(verificarPermissaoDeEntrada(pessoa1)) // true
console.log(verificarPermissaoDeEntrada(pessoa2)) // false
console.log(verificarPermissaoDeEntrada(pessoa3)) // false