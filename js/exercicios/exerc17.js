export function faccat17() {
    alert("Verificação de Aprovação do Aluno");

    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));

    let media = (nota1 + nota2) / 2;

    alert("Média do Aluno: " + media.toFixed(2));

    if (media >= 6) {
    alert("Aluno Aprovado!");
    } else {
    alert("Aluno Não Aprovado.");
    }
}