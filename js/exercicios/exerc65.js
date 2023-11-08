export function faccat65(){
    alert("Cálculo da Soma dos Inteiros entre Dois Valores");

    let primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
    let segundoValor = parseInt(prompt("Digite o segundo valor (maior que o primeiro):"));
    let soma = 0;

    for (let i = primeiroValor; i <= segundoValor; i++) {
        soma += i;
    }

    alert(`A soma dos inteiros entre ${primeiroValor} e ${segundoValor} é: ${soma}`);
}