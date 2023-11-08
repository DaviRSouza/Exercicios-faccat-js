export function faccat73(){
    alert("Pesquisa sobre Habitantes");

    let somaSalario = 0;
    let somaNumeroFilhos = 0;
    let maiorSalario = Number.MIN_VALUE;
    let contadorSalarioMenor150 = 0;
    let totalHabitantes = 0;
    while (true) {
        let salario = parseFloat(prompt("Digite o salário do habitante (digite um valor negativo para encerrar):"));

        if (salario < 0) {
            break;
        }

        let numeroFilhos = parseInt(prompt("Digite o número de filhos desse habitante:"));

        somaSalario += salario;
        somaNumeroFilhos += numeroFilhos;
        totalHabitantes++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario < 150) {
            contadorSalarioMenor150++;
        }
    }
    let mediaSalario = somaSalario / totalHabitantes;
    let mediaNumeroFilhos = somaNumeroFilhos / totalHabitantes;
    let percentualSalarioMenor150 = (contadorSalarioMenor150 / totalHabitantes) * 100;

    alert(`Média de salário da população: R$ ${mediaSalario.toFixed(2)}`);
    alert(`Média do número de filhos: ${mediaNumeroFilhos.toFixed(2)}`);
    alert(`Maior salário dos habitantes: R$ ${maiorSalario.toFixed(2)}`);
    alert(`Percentual de pessoas com salário menor que R$ 150,00: ${percentualSalarioMenor150.toFixed(2)}%`);
}