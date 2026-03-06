// Utilização do método charAt()
let texto = "Abacate";
let exCharAt = texto.charAt(1);

console.log(exCharAt);

// Utilização do metodo charCodeAt()
let exCharcodeAt = texto.charCodeAt(6);
console.log(exCharcodeAt);

// Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);

//Utilização do método at()
let exAt = texto.at(6);
let exAtComoArray = texto(2);
console.log(exAt);
console.log(exAtComoArray);

// Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ",texto2);console.log9(texto3)

// Utilização do método slice()
let frutas = "Banana, Maçã e Uva";
let exSlice = frutas.slice(2);
console.log(exSlice);

// Utilização de toUpperCase() e toLowercase
let carro = "Camaro SS";
let carro2 = "Impala";

let exLowerCase = carro2.toLowerCase();
let exUpperCase = carro.toUpperCase();

console.log(exLowerCase);
console.log(exUpperCase);

// Utilização do método isWellFormed()
let saudacao = "Olá, seja Bem-Vindo!";
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);

// Utilização do método trim()
let Thalison = "            O Thalison gosta do Corinthians"
let exTrim = Thalison.trim();
console.log(exTrim);