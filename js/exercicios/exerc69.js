export function faccat69(){
    alert("Cálculo do Valor Total em Estoque e Média de Valor das Mercadorias");

    let valorTotalEmEstoque = 0;
    let quantidadeDeMercadorias = 0;

    do {
        let valorDaMercadoria = parseFloat(prompt("Digite o valor da mercadoria:"));
        valorTotalEmEstoque += valorDaMercadoria;
        quantidadeDeMercadorias++;

        let maisMercadorias = prompt("Deseja adicionar mais mercadorias? (S/N)").toUpperCase();
        if (maisMercadorias !== 'S') {
            break;
        }
    } while (true);

    if (quantidadeDeMercadorias === 0) {
        alert("Nenhuma mercadoria foi inserida.");
    } else {
        let mediaDeValor = valorTotalEmEstoque / quantidadeDeMercadorias;
        alert(`O valor total em estoque é: R$ ${valorTotalEmEstoque.toFixed(2)}`);
        alert(`A média de valor das mercadorias é: R$ ${mediaDeValor.toFixed(2)}`);
    }
}