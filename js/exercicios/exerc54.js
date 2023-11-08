export function faccat54(){
    alert("Impressão de Números Inteiros de 1 a N (com validação)");

    let N;

    do {
        N = parseInt(prompt("Digite um valor para N (maior que 0):"));
    } while (N <= 0);

    for (let i = 1; i <= N; i++) {
        alert(i);
    }
}