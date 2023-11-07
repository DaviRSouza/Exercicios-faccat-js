export function faccat37() {
    let quantidadeMorangos = parseFloat(prompt("Digite a quantidade de morangos (em Kg):"));
    let quantidadeMacas = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):"));

    const precoMorangoAte5Kg = 2.50;
    const precoMorangoAcima5Kg = 2.20;
    const precoMacaAte5Kg = 1.80;
    const precoMacaAcima5Kg = 1.50;
    const limiteDescontoKg = 8;
    const limiteDescontoValor = 25;
    const desconto = 0.10;

    let valorMorangos, valorMacas, valorTotal;

    if (quantidadeMorangos <= 5) {
    valorMorangos = quantidadeMorangos * precoMorangoAte5Kg;
    } else {
    valorMorangos = quantidadeMorangos * precoMorangoAcima5Kg;
    }

    if (quantidadeMacas <= 5) {
    valorMacas = quantidadeMacas * precoMacaAte5Kg;
    } else {
    valorMacas = quantidadeMacas * precoMacaAcima5Kg;
    }

    valorTotal = valorMorangos + valorMacas;

    if (quantidadeMorangos + quantidadeMacas > limiteDescontoKg || valorTotal > limiteDescontoValor) {
    valorTotal *= (1 - desconto);
    }

    alert("Valor a ser pago: R$" + valorTotal.toFixed(2));
}