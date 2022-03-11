// Primeira parte
// Primeira questao


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  for (let key in info) {
      console.log(`Bem vinda, ${info.personagem}`);
  }

//   Segunda questao

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info["recorrente"] = "Sim";
  console.log(info);

//   Terceira questao

for (let key in info) {
    console.log(key);
}

// Quarta questao

for (let key in info) {
    console.log(info[key]);
}

// Quinta questao

let info2 = {
    personagem: "Margarida e Tio Patinhas",
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #17",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
    recorrente: "Ambos recorrentes // Atenção para essa última linha!",
};

for (let key in info2){
    console.log(key ,info2[key]);
}

// Sexta questao

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  
      console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'.`);
    // console.log(leitor[key])
  

  