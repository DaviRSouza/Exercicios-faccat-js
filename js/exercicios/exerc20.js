export function faccat20() {
    alert("Ordenação de Dois Valores em Ordem Crescente");

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    let valorMenor, valorMaior;

    if (valor1 < valor2) {
    valorMenor = valor1;
    valorMaior = valor2;
    } else {
    valorMenor = valor2;
    valorMaior = valor1;
    }

    alert("Valores em ordem crescente: " + valorMenor + ", " + valorMaior);
}