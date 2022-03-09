let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers.length);

// Primeira questao

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Segunda questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index];
}

console.log(soma);

// Terceira questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma1 = 0;
for (let index1 = 0; index1 < numbers.length; index1++) {
    soma1 = soma1 + numbers[index1];
}
let media = soma1 / numbers.length;
console.log(media);

// Quarta questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma2 = 0;
for (let index2 = 0; index2 < numbers.length; index2++) {
    soma2 = soma2 + numbers[index2];
}
let media2 = soma2 / numbers.length;
if (media2 > 20) {
    console.log(media2 + " é maior que 20.");
}
else {
    console.log(media2 + " não é maior que 20.");
}

// Quinta questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for (let index3 = 0; index3 < numbers.length; index3++) {
    if (numbers[index3] > contador) {
        contador = numbers[index3]
    }
}
console.log(contador)

// // Sexta questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantImpar = 0;
for (let index6 = 0; index6 < numbers.length; index6++) {
    if (numbers[index6] % 2 !== 0) {
        quantImpar++
    }
    if (quantImpar == 0) {
        console.log("Não existe valor ímpar!")
    }
}
console.log(quantImpar);

Sétima questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador2 = 0;
for (let index7 = 0; index7 < numbers.length; index7++) {
    if (numbers[index7] < numbers[0]) {
        contador2 = numbers[index7];
    }
}
console.log(contador2);
// Oitava questao

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index8 = 0; index8 < numero.length; index8++) {
    console.log(numero[index8]);
}

// Nona questao

for (let index9 = 0; index9 < numero.length; index9++) {
    console.log(numero[index9]/2);
}
