// Exercicio 9: Escreva um algoritimo para ler as dimensões de um trapézio (base e altura), calcular e escreva a área do Trapézio

alert("Área do Trapézio");

let B = parseFloat(prompt("Informe um valor da base maior"));
let b = parseFloat(prompt("Informe um valor da base menor"));
let altura = parseFloat(prompt("Informe um valor da altura"));

let resultado = ((B+b)* altura) /2;

alert("O resultado da operação é:" + resultado);