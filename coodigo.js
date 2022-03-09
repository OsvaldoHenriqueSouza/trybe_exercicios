// Primeira questao
let fatorial4 = 10;
let resultado = fatorial4;
for (let index = 1; index < fatorial4; index++) {
    resultado *= index;
}
console.log(resultado);

// Segunda questao

let palavra = "trybe";
let palavraInvertida = "";
for (let i = palavra.length-1; i >= 0; i-= 1) {
    palavraInvertida += palavra[i]
}

console.log(palavraInvertida);

// Terceira questao

// Maior palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index3 = 0; index3 < array.length; index3++) {
    if (array[index3].length < menorPalavra) {
        menorPalavra = array[index3]
    }
}
console.log(menorPalavra)

for (let index4 = 0; index4 < array.length; index4++) {
    if (array[index4].length > maiorPalavra.length) {
        maiorPalavra = array[index4]
    }
}
console.log(maiorPalavra);




// Quarta questao

