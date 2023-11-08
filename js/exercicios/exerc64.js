export function faccat64(){
    alert("Soma de Números Menores que 40");

    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i}:`));
        if (numero < 40) {
            soma += numero;
        }
    }

    alert(`A soma dos números menores que 40 é: ${soma}`);
}