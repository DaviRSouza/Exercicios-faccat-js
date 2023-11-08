export function faccat61(){
    alert("Cálculo da Média Aritmética de 10 Valores");

    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(prompt(`Digite o valor ${i}:`));
        soma += valor;
    }

    let media = soma / 10;

    alert(`A média aritmética dos 10 valores lidos é: ${media}`);

}