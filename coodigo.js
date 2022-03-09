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

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
for (let index3 = 0; index3 < array.length; index3++) {
    if (index3[0] < array[index3]) {
        maiorPalavra = array[index3];
    }
}
console.log(maiorPalavra);

// Quarta questao

