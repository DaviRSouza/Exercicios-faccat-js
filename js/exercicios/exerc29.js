export function faccat29() {
    alert("Soma dos Dois Maiores Valores");

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

    let somaDosDoisMaiores;

    if (valor1 > valor2 && valor1 > valor3) {
    somaDosDoisMaiores = valor1 + Math.max(valor2, valor3);
    } else if (valor2 > valor1 && valor2 > valor3) {
    somaDosDoisMaiores = valor2 + Math.max(valor1, valor3);
    } else {
    somaDosDoisMaiores = valor3 + Math.max(valor1, valor2);
    }

    alert("A soma dos dois maiores valores é: " + somaDosDoisMaiores);
}