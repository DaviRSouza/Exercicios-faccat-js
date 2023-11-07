export function faccat48(){
    alert("Cálculo da Média de Avaliações");

    let nota1, nota2;

    do {
        nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));

    if (nota1 < 0 || nota1 > 10) {
        alert("Nota inválida. Digite uma nota entre 0 e 10.");
    }
    } while (nota1 < 0 || nota1 > 10);

    do {
        nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));

    if (nota2 < 0 || nota2 > 10) {
        alert("Nota inválida. Digite uma nota entre 0 e 10.");
    }
    } while (nota2 < 0 || nota2 > 10);

    let media = (nota1 + nota2) / 2;

    alert("Média das avaliações: " + media.toFixed(2));
}