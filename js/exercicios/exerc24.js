export function faccat24(){
    alert("Cálculo do Salário Total do Vendedor");

    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
    let valorVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas:"));

    const limiteComissao = 1500.00; // Limite de vendas para comissão de 3%
    const taxaComissaoAteLimite = 0.03; // 3%
    const taxaComissaoAposLimite = 0.05; // 5%

    let comissao;

    if (valorVendas <= limiteComissao) {
    comissao = valorVendas * taxaComissaoAteLimite;
    } else {
    comissao = (limiteComissao * taxaComissaoAteLimite) + ((valorVendas - limiteComissao) * taxaComissaoAposLimite);
    }

    let salarioTotal = salarioFixo + comissao;

    alert("Salário Fixo: R$" + salarioFixo.toFixed(2));
    alert("Valor das Vendas: R$" + valorVendas.toFixed(2));
    alert("Comissão: R$" + comissao.toFixed(2));
    alert("Salário Total: R$" + salarioTotal.toFixed(2));
}