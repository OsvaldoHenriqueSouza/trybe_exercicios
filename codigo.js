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