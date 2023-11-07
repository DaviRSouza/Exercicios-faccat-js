export function faccat44(){
    alert("Divisão com Validação de Zero");

    let primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
    let segundoValor = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

    while (segundoValor === 0) {
        alert("O segundo valor não pode ser zero. Por favor, digite um novo valor.");
        segundoValor = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));
    }

    let resultadoDivisao = primeiroValor / segundoValor;

    alert("Resultado da divisão: " + resultadoDivisao);
}