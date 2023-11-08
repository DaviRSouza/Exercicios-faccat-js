export function faccat71(){
    alert("Encontre o Maior Número e a Média dos Números Lidos");

    let quantidade = parseInt(prompt("Digite a quantidade de números a serem lidos:"));
    let maiorNumero = Number.MIN_VALUE;
    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i}:`));
        
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
        
        soma += numero;
    }

    let media = soma / quantidade;

    alert(`O maior número lido é: ${maiorNumero}`);
    alert(`A média dos números lidos é: ${media}`);
}