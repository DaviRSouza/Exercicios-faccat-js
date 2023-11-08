export function faccat62(){
    alert("Cálculo da Média Aritmética das Notas dos Alunos");

    let numeroDeAlunos = parseInt(prompt("Digite o número de alunos na turma:"));
    let somaDasNotas = 0;

    for (let i = 1; i <= numeroDeAlunos; i++) {
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
        somaDasNotas += nota;
    }

    let media = somaDasNotas / numeroDeAlunos;

    alert(`A média aritmética das notas dos alunos é: ${media}`);

}