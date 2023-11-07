export function faccat13() {
    alert("Cálculo da Média Ponderada");

    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;

    let mediaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

    alert("Média Final do Aluno: " + mediaFinal.toFixed(2));
}