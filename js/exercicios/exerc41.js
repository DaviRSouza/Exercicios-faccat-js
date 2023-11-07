export function faccat41() {
    alert("Cálculo de Média de Aproveitamento e Conceito do Aluno");

    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

    let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;

    let conceito;

    if (mediaAproveitamento >= 9.0) {
        conceito = "A";
    } else if (mediaAproveitamento >= 7.5) {
        conceito = "B";
    } else if (mediaAproveitamento >= 6.0) {
        conceito = "C";
    } else {
        conceito = "D";
    }

    alert("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2));
    alert("Conceito do Aluno: " + conceito);
}