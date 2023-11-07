export function faccat47(){
    alert("Divisão com Validação de Zero (while)");

    let primeiroValor, segundoValor;

    while (true) {
        primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
        segundoValor = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

    if (segundoValor !== 0) {
        break;
    }

    alert("VALOR INVÁLIDO. O segundo valor não pode ser zero. Por favor, digite um novo valor.");
    }

    let resultadoDivisao = primeiroValor / segundoValor;

    alert("Resultado da divisão: " + resultadoDivisao);
}