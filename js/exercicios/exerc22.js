export function faccat22() {
    alert("Cálculo do Salário Mensal com Horas Extras");

    let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
    let salarioPorHora = parseFloat(prompt("Digite o salário por hora:"));

    const horasSemanaisPadrao = 40;
    const semanasNoMes = 4;
    const percentualHoraExtra = 0.5; // 50%

    let salarioTotal;

    if (horasTrabalhadas <= horasSemanaisPadrao * semanasNoMes) {
    salarioTotal = horasTrabalhadas * salarioPorHora;
    } else {
    let horasExtras = horasTrabalhadas - horasSemanaisPadrao * semanasNoMes;
    salarioTotal = (horasSemanaisPadrao * semanasNoMes * salarioPorHora) + (horasExtras * salarioPorHora * (1 + percentualHoraExtra));
    }

    alert("Salário Total do Funcionário: R$" + salarioTotal.toFixed(2));
}