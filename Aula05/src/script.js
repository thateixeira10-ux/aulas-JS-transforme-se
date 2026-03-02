// Calculadora com Switch
let numero1 = parseFloat(prompt("Informe o primeiro valor: "));
let numero2 = parseFloat(prompt("Informe o segundo valor: "));

let opcoes = prompt(
    "Selecione a operação: \n \n " +
    "+: Adição \n" +
    "-: Subtração \n" +
    "*: Multiplicação \n" +
    "/: Divisão \n"
);

switch (opcoes) {
    case "+":
        alert("o resultado da operação é: " + (numero1 + numero2));
        break;

        case"-":
        alert("O resultado da operação é: "+ (numero1 - numero2));
        break

        case "*":
            alert("O resultado da operação é: " + (numero1 * numero2))
            break

        case "/":
            if (numero2 === 0) {
                alert("Não é possivel dividir por zero. tente novamente:");
            } else {
                alert("o resultado da operação é: " + (numero1 / numero2));
            }
            break;

        default:
            alert("informe um valor válido:");
}