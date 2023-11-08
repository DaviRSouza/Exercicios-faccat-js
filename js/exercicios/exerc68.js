export function faccat68(){
    alert("Cálculo do Valor Total em Estoque e Média de Valor das Mercadorias");

    let numeroDeMercadorias = parseInt(prompt("Digite o número total de mercadorias em estoque:"));
    let valorTotalEmEstoque = 0;

    for (let i = 1; i <= numeroDeMercadorias; i++) {
        let valorDaMercadoria = parseFloat(prompt(`Digite o valor da mercadoria ${i}:`));
        valorTotalEmEstoque += valorDaMercadoria;
    }

    let mediaDeValor = valorTotalEmEstoque / numeroDeMercadorias;

    alert(`O valor total em estoque é: R$ ${valorTotalEmEstoque.toFixed(2)}`);
    alert(`A média de valor das mercadorias é: R$ ${mediaDeValor.toFixed(2)}`);

}