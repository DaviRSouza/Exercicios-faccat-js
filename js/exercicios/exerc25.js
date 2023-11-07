export function faccat25(){
    alert("Cálculo do Saldo Atual e Verificação de Saldo");

    let numeroConta = prompt("Digite o número da conta do cliente:");
    let saldo = parseFloat(prompt("Digite o saldo da conta:"));
    let debito = parseFloat(prompt("Digite o débito da conta:"));
    let credito = parseFloat(prompt("Digite o crédito da conta:"));

    let saldoAtual = saldo - debito + credito;

    alert("Saldo Atual: R$" + saldoAtual.toFixed(2));

    if (saldoAtual >= 0) {
    alert("Saldo Positivo");
    } else {
    alert("Saldo Negativo");
    }
}