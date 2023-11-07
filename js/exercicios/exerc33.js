export function faccat33(){
    alert("Comparação de Dois Valores");

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 === valor2) {
        alert("Números iguais");
    } else if (valor1 > valor2) {
        alert("Primeiro é maior");
    } else {
        alert("Segundo é maior");
    }
}