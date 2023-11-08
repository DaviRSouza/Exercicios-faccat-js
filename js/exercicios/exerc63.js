export function faccat63(){
    alert("Cálculo da Soma dos 10 Números Lidos");

    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i}:`));
        soma += numero;
    }

    alert(`A soma dos 10 números lidos é: ${soma}`);

}