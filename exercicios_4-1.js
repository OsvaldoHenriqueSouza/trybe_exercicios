// Primeira questão

const num1 = 5;
const num2 = 4;
const comparacao = 7;


// A seguir operação de adição

let adicao = num1 + num2;

// A seguir operação de subtração

let subtracao = num1 - num2;

// A seguir operação de multiplicação

let multiplicacao = num1 * num2;

// A seguir operação de divisão

let divisao = num1 / num2;

// Segunda questão

if (num1 > num2) {
    console.log("O num1 é maior que o num2.");
}
else {
    console.log("O num2 é maior que o num1.");
}

// Terceira questão

if (comparacao > num1 && comparacao > num2) {
    console.log("O comparacao é maior que os demais.")
}
else if (num1 > comparacao && num1 > num2) {
    console.log("O num1 é maior que os demais.")
}
else {
    console.log("O num2 é maior que os demais.")
}

// Quarta questão

let positiveNegativeZero = 9;

if (positiveNegativeZero > 0) {
    console.log("Positivo.")
}
else if (positiveNegativeZero === 0) {
    console.log("Negativo.")
}
else {
    console.log("Zero.")
}

// Quinta questão


let angulo1 = 35;
let angulo2 = 105;
let angulo3 = 40;


if (angulo1 + angulo2 + angulo3 == 180) {
    console.log(true)
}
else {
    console.log(false)
}

// Sexta questão

let pecaXadrez = "bispo";



// Sétima questão

let porcentagem = 70;

if (porcentagem < 50) {
    console.log("F")
}
else if (porcentagem >= 50 && porcentagem < 60) {
    console.log("E")
}
else if (porcentagem >= 60 && porcentagem < 70) {
    console.log("D")
}
else if (porcentagem >= 70 && porcentagem < 80) {
    console.log("C")
}
else if (porcentagem >= 80 && porcentagem < 90) {
    console.log("B")
}
else {
    console.log("A")
}

// Oitava questão

const num3 = 12;
const num4 = 15;
const num5 = 36;

if (num3 % 2 == 0 || num4 % 2 == 0 || num5 % 2 == 0) {
    console.log(true)
}
else {
    console.log(false)
}

// Nona questão

const num3 = 12;
const num4 = 15;
const num5 = 36;

if (num3 % 2 != 0 || num4 % 2 != 0 || num5 % 2 != 0) {
    console.log(true)
}
else {
    console.log(false)
}

// Décima questão

const valorDoProduto = 20;
const valorDeVenda = 50;
let quantidadeVendida = 1000;

// A seguir o nome da variável "valorDoProdutoTotalSituacional" se dá porque foi a única forma de anteder o requisito do problema proposto

const valorDoProdutoTotalSituacional = valorDoProduto * 1.2 * quantidadeVendida;

let lucro = (valorDeVenda * quantidadeVendida) - valorDoProdutoTotalSituacional;

if (valorDoProduto == 0 || valorDoProdutoTotalSituacional == 0 || valorDeVenda == 0 || quantidadeVendida == 0) {
    console.log("Impossível realizar operação: favor atribuir valor maior que zero!")
}
else {
    console.log(lucro)
}

// Décima primeira questão

let salarioBruto = 4200;
let descontoInss = null;

// A seguir condicional para desconto do INSS

if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11
}
else {
    salarioBruto - 570.88
}

// A segui condicional para o desconto do IR (imposto de renda)

let salarioComDescontoInss = salarioBruto - descontoInss;
let descontoDoImpostoDeRenda = null;

if (salarioComDescontoInss <= 1903.98) {
    descontoDoImpostoDeRenda = 0
}
else if (salarioComDescontoInss > 1903.98 && salarioComDescontoInss <= 2826.65) {
    descontoDoImpostoDeRenda = (salarioComDescontoInss * 0.075) - 142.80
}
else if (salarioComDescontoInss > 2826.65 && salarioComDescontoInss <= 3751.05) {
    descontoDoImpostoDeRenda = (salarioComDescontoInss * 0.15) - 354.80
}
else if (salarioComDescontoInss > 3751.05 && salarioComDescontoInss <= 4664.68) {
    descontoDoImpostoDeRenda = (salarioComDescontoInss * 0.225)
}
else {
    descontoDoImpostoDeRenda = (salarioComDescontoInss * 0.275) - 869.36
}

let salarioLiquido = salarioBruto - descontoInss - descontoDoImpostoDeRenda;

console.log(salarioLiquido)