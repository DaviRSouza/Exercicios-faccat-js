export function faccat79(){
    alert("Cálculo da Média da Turma e Contagem de Alunos com Nota Acima da Média");

    let totalAlunos = 20;
    let notas = [];
    let somaNotas = 0;
    for (let i = 1; i <= totalAlunos; i++) {
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
        notas.push(nota);
        somaNotas += nota;
    }
    let mediaTurma = somaNotas / totalAlunos;

    let contadorAcimaDaMedia = 0;

    for (let i = 0; i < totalAlunos; i++) {
        if (notas[i] > mediaTurma) {
            contadorAcimaDaMedia++;
        }
    }
    alert(`Média da turma: ${mediaTurma.toFixed(2)}`);
    alert(`Número de alunos com nota acima da média: ${contadorAcimaDaMedia}`);
}