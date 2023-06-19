function melhoresAlunos(notas) {
  let melhorAluno = { nome: '', media: 0 }
  for (let aluno in notas) {
    let media = notas[aluno].reduce((soma, nota) => soma + nota) / notas[aluno].length
    if (media > melhorAluno.media) {
      melhorAluno.nome = aluno
      melhorAluno.media = media
    }
  }
  return melhorAluno
}

const notas = {
  Augusto: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9]
}

console.log(melhoresAlunos(notas))