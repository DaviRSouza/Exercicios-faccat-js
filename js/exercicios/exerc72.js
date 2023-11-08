export function faccat72(){
    alert("Cálculo do Maior Preço e Média dos Preços de 15 Produtos");

    let maiorPreco = Number.MIN_VALUE;
    let somaPrecos = 0;

    for (let i = 1; i <= 15; i++) {
        let codigo = parseInt(prompt(`Digite o código do produto ${i}:`));
        let preco = parseFloat(prompt(`Digite o preço do produto ${i}:`));

        if (preco > maiorPreco) {
            maiorPreco = preco;
        }

        somaPrecos += preco;
    }
    let mediaPrecos = somaPrecos / 15;
    alert(`O maior preço lido é: R$ ${maiorPreco.toFixed(2)}`);
    alert(`A média dos preços dos produtos é: R$ ${mediaPrecos.toFixed(2)}`);
}