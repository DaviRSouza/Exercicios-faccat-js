export function faccat16() {
    alert("Cálculo do Custo de Compra de Maçãs");

    let numeroDeMaca = parseInt(prompt("Digite o número de maçãs compradas:"));
    let precoPorMaca;

    if (numeroDeMaca < 12) {
        precoPorMaca = 1.30;
    } else {
        precoPorMaca = 1.00;
    }

    let custoTotal = numeroDeMaca * precoPorMaca;

    alert("Custo total da compra: R$" + custoTotal.toFixed(2));
}