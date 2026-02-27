let y = 10;

if (y > 3) {
  console.log("A variavel y é maior que 3!");
} else if ((y = 3)) {
  console.log("A variavel y é igual a 3");
}

let a = 2;

if (a > 3) {
    console.log('A variavel é maior que 3');
} else if (a == 3) {
    console.log('A variavel a é igual a 3')
} else {
    console.log('A variavel a possui um valor diferente das verificações.');
}

// Exemplo de if
const elemento = document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);

console.log(hora);

if (pegarHoras > 18) {
    elemento.innegHTML = "Boa noite";
}

// Exemplo if 2 
let idade = 22;
let texto = 'Ela não te quer mais';

if (idade >=22) {
    
}