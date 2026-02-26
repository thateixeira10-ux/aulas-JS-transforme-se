// Exemplos de operador de atribuição
let x = 100;

x += 5;
console.log(x);


x-=5;
console.log(x);


let soma = 5 + 5 + 4;
console.log(soma);

const primeironome = 'Thalison';
const ultimonome = 'Natalino'

// let nomecompleto = primeironome + ultimonome;

// console.log(nomecompleto);

// Exemplos de tipos em JavaScript
// String
let cor = "Azul"
let fruta = 'Laranja'
console.log(cor)
console.log(fruta)

// number
let soma1 = 5 + 5;
let subtração = 10 - 3;
console.log(soma1)
console.log(subtração)

// Bigint
let Bigint = 1234567890123456789012345n;
let Bigint2 = BigInt(1234567890123456789012345);

console.log(Bigint);
console.log(Bigint2);

// Boolean
let valorverdadeiro = true;
let valorfalso = false;
console.log(valorverdadeiro);
console.log(valorfalso);

// object
const carro = {
    marca:'Pagani',
    modelo:'huayra',
    cor: 'Preto',
}

console.log(carro)
console.log('A marca do carro é:' + carro.marca);

// Array
const frutas = ['Laranja','Banana','Uva','Morango','Abacaxi'];

console.log(frutas);

// Date object
const data = new Date;

console.log(data)

// Undefined
let nulo = null;

console.log(nulo);

// Symbol
let y = Symbol();

console.log(y);

// Exemplos de typeof
let StringTipo = '300';
let numberTipo = 300;

const tipoDado = typeof StringTipo;

console.log(tipoDado)

// Exemplos de Boolean
let cinco = 5;
let comparação = cinco == 8;

console.log(comparação);