const valorEmMetros = prompt("Digite a metragem");
const opcaoDeConversao = prompt("Opção de conversão: mm/cm/dm/dam/hm/km");

switch (opcaoDeConversao) {
    case "mm":
        var mm = valorEmMetros * 1000
        alert("O valor convertido em mm é :" + mm)
        break;
    case "cm":
        var cm = valorEmMetros * 100
        alert("O valor convertido em cm é :" + cm)
        break;
    case "dm":
        var dm = valorEmMetros * 10
        alert("O valor convertido em dm é :" + dm)
        break;
    case "dam":
        var dam = valorEmMetros / 10
        alert("O valor convertido em dam é :" + dam)
        break;
    case "hm":
        var hm = valorEmMetros / 100
        alert("O valor convertido em hm é :" + hm)
        break;
    case "km":
        var km = valorEmMetros / 1000
        alert("O valor convertido em km é :" + km)
        break;
    default:
        alert("Opção Inválida")
        break;
}