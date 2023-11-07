export function faccat11() {
    alert("Cálculo de Salário de Vendedor de Carros Usados");
    
    let nomeVendedor = prompt("Digite o nome do vendedor:");
    let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
    let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
    let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
    let valorPorCarroVendido = parseFloat(prompt("Digite o valor por carro vendido:"));

    let comissaoCarros = numeroCarrosVendidos * valorPorCarroVendido;
    let comissaoVendas = (valorTotalVendas * 0.05);
    let salarioFinal = salarioFixo + comissaoCarros + comissaoVendas;

    alert("Nome do vendedor: " + nomeVendedor +
        "\nSalário fixo: R$" + salarioFixo.toFixed(2) +
        "\nComissão por carros vendidos: R$" + comissaoCarros.toFixed(2) +
        "\nComissão por vendas: R$" + comissaoVendas.toFixed(2) +
        "\nSalário final: R$" + salarioFinal.toFixed(2));
}