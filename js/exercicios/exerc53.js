export function faccat53(){
    alert("Impressão de Números Inteiros de 1 a N");

    let N = parseInt(prompt("Digite um valor para N:"));

    if (N > 0) {
        for (let i = 1; i <= N; i++) {
            alert(i);
        }
    } else {
        alert("O valor de N deve ser maior que zero.");
    }
}