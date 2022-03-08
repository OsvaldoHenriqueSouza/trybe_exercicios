let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers.length);

// Primeira questao

// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// Segunda questao
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma = numbers[index] += numbers[index]
}

console.log(soma);
// Terceira questao

// Quinta questao

for (let index5 = 0; index5 < numbers.length; index5++) {

}

// Sexta questao

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantImpar = 0;
// let requisitoImpar = numbers.index6 % 2;
for (let index6 = 0; index6 < numbers.length; index6++) {
    if (numbers[index6] % 2 == 0) {
        console.log("Não é ímpar.")
    }
    else {
        quantImpar++
    }
}
console.log(quantImpar);

// Sétima questao

// Oitava questao

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index8 = 0; index8 < numero.length; index8++) {
    console.log(numero[index8]);
}

// Nona questao

for (let index9 = 0; index9 < numero.length; index9++) {
    console.log(numero[index9]/2);
}