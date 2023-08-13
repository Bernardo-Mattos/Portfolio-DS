// Array de pessoas no show
let pessoasNoShow = [
    {
      nome: "daniel",
      idade: 17,
      estadoCivil: "Solteiro"
    },
    {
      nome: "bernardo",
      idade: 17,
      estadoCivil: "solteiro né"
    },
    {
      nome: "Pedro",
      idade: 17,
      estadoCivil: "casado"
    }
  ];
  
  // Função para exibir as informações das pessoas no show
  function exibirPessoasNoShow() {
    for (let i = 0; i < pessoasNoShow.length; i++) {
      let pessoa = pessoasNoShow[i];
      console.log("Nome: " + pessoa.nome);
      console.log("Idade: " + pessoa.idade);
      console.log("Estado Civil: " + pessoa.estadoCivil);
      console.log("--------------------");
    }
  }

  exibirPessoasNoShow();