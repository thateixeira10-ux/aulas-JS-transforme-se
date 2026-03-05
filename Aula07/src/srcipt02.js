// Exemplo de utilização do length em string
let texto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

elemento.innerHTML = tamanho;

// Exemplo de utilização de caractere de escape
let texto2 = 'Somente a dor \'coletiva\' gera a união.';

let texto3 = "Somente a dor \"coletiva\" gera a união;";

let texto4 = "Somente a dor \\ coletiva gera a união.";

console.log(texto2);
console.log(texto3);
console.log(texto4);

// Exemplo de template string
let nome = "Thalison Guilherme Teixeira Natalino";
let idade = 22;
let frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

let frase2 = "Meu nome é " + nome + "e tenho " + idade + "anos"

console.log(frase)

// Exemplo de adição de HTML com template string em JS
const elemento2 = document.querySelector('.ex2');
console.log(elemento2);

elemento2.innerHTML = `
<style>
    .container {
    justify-content: center;
    display: flex;
    gap: 20px;
    background-color: orangered;
    }

    .container div{
    text-align: center;
    color: darkgreen;
    width: 100px;
    height: 100px;
    background-color: orange;
    }
</style>
    <div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    </div>
`;