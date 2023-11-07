export function faccat40() {
    alert("Cálculo de Total, Desconto e Total a Pagar por Produto");

    let descricaoProduto = prompt("Digite a descrição do produto:");
    let quantidadeAdquirida = parseInt(prompt("Digite a quantidade adquirida:"));
    let precoUnitario = parseFloat(prompt("Digite o preço unitário:"));

    let total = quantidadeAdquirida * precoUnitario;
    let desconto = 0;

    if (quantidadeAdquirida <= 5) {
    desconto = total * 0.02; // 2% de desconto
    } else if (quantidadeAdquirida <= 10) {
    desconto = total * 0.03; // 3% de desconto
    } else {
    desconto = total * 0.05; // 5% de desconto
    }

    let totalAPagar = total - desconto;

    alert("Descrição do Produto: " + descricaoProduto);
    alert("Total: R$" + total.toFixed(2));
    alert("Desconto: R$" + desconto.toFixed(2));
    alert("Total a Pagar: R$" + totalAPagar.toFixed(2));
}