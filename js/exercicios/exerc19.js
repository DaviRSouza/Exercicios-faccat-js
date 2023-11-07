export function faccat19() {
    alert("Identificação do Maior Valor");

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 > valor2) {
    alert("O maior valor é: " + valor1);
    } else {
    alert("O maior valor é: " + valor2);
    }
}

