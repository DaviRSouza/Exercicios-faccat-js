export function faccat35() {
    alert("Cálculo do Valor a Pagar por Combustível com Desconto");

    let litrosVendidos = parseFloat(prompt("Digite o número de litros vendidos:"));
    let tipoCombustivel = prompt("Digite o tipo de combustível (A para álcool, G para gasolina):");

    const precoGasolina = 3.30;
    const precoAlcool = 2.90;

    let valorAPagar;

    if (tipoCombustivel === 'A' || tipoCombustivel === 'a') {
    if (litrosVendidos <= 20) {
        valorAPagar = litrosVendidos * precoAlcool * 0.97; // 3% de desconto
    } else {
        valorAPagar = litrosVendidos * precoAlcool * 0.95; // 5% de desconto
    }
    } else if (tipoCombustivel === 'G' || tipoCombustivel === 'g') {
    if (litrosVendidos <= 20) {
        valorAPagar = litrosVendidos * precoGasolina * 0.96; // 4% de desconto
    } else {
        valorAPagar = litrosVendidos * precoGasolina * 0.94; // 6% de desconto
    }
    } else {
        alert("Tipo de combustível não reconhecido. Por favor, digite A ou G.");
        return;
    }

    alert("Valor a Pagar: R$" + valorAPagar.toFixed(2));
}