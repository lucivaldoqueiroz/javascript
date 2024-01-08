var primeiroNumero = prompt('Digite o primeiro número');
var segundoNumero = prompt('Digite o segundo número');
var escolhaAOperacao = prompt('Digite: Soma,Multi,Sub,Div');

if(escolhaAOperacao === "Soma") {
    var resultado = primeiroNumero + segundoNumero
    alert("o Resulto da soma é: " + resultado)
} else if (escolhaAOperacao === "Multi"){
    var resultado = primeiroNumero * segundoNumero
    alert("o Resulto da Multiplicação é: " + resultado)
} else if (escolhaAOperacao === "Sub") {
    var resultado = primeiroNumero - segundoNumero
    alert("o Resulto da Subtração é: " + resultado)
} else if (escolhaAOperacao === "Div") {
    var resultado = primeiroNumero / segundoNumero
    alert("o Resulto da Divissão é: " + resultado)
} else {
    alert("Algum dado foi digitado errado, favor verifique")
}