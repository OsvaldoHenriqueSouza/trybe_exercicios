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
    
      // Setima questao
  
      leitor.livrosFavoritos[{}] = {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }

      console.log(leitor);

      // Oitava questao

      console.log(`${leitor.nome} tem 2 livros favoritos.`);

// Segunda parte 

// Primeira questao


function verificarPalindrome (...palavra) {
  if (palavra === palavra.reverse()){
    return true;
  }
    return false;
}

console.log(verificarPalindrome(["jbdszbvkjhbsandvuianbjsd owasdjnbvQI"]));

// Segunda questao


function indiceMaiorValor (...numero) {
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] > numero[0]) {
      return index;
    }
  }
}
console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));






let num = [1,2,3,4,5];

console.log(num[2])
for (let i = 0; i < num.length; i += 1) {
}