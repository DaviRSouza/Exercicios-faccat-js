export function faccat46(){
    alert("Divisão com Validação de Zero (do-while)");

    let primeiroValor, segundoValor;

    do {
        primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
        segundoValor = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

    if (segundoValor === 0) {
        alert("VALOR INVÁLIDO. O segundo valor não pode ser zero. Por favor, digite um novo valor.");
    }
    } while (segundoValor === 0);

    let resultadoDivisao = primeiroValor / segundoValor;

    alert("Resultado da divisão: " + resultadoDivisao);
}