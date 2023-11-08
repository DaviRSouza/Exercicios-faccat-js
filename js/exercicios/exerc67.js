export function faccat67(){
    alert("Cálculo da Soma dos Inteiros entre Dois Valores");

    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseInt(prompt("Digite o segundo valor:"));
    let soma = 0;

    let inicio, fim;

    if (valor1 <= valor2) {
        inicio = valor1;
        fim = valor2;
    } else {
        inicio = valor2;
        fim = valor1;
    }

    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }

    alert(`A soma dos inteiros entre ${inicio} e ${fim} é: ${soma}`);

}