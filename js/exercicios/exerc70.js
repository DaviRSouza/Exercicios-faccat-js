export function faccat70(){
    alert("Encontre o Maior e o Menor Valor entre 100 Valores");

    let maiorValor = Number.MIN_VALUE;
    let menorValor = Number.MAX_VALUE;

    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(prompt(`Digite o valor ${i}:`));

        if (valor > maiorValor) {
            maiorValor = valor;
        }

        if (valor < menorValor) {
            menorValor = valor;
        }
    }
    alert(`O maior valor lido é: ${maiorValor}`);
    alert(`O menor valor lido é: ${menorValor}`);
}