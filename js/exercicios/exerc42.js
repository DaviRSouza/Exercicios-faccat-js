export function faccat42() {
    alert("Verificação de Qualificação para Aposentadoria");

    let numeroEmpregado = parseInt(prompt("Digite o número do empregado (código):"));
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
    let anoIngressoEmpresa = parseInt(prompt("Digite o ano de ingresso na empresa:"));

    let idade = new Date().getFullYear() - anoNascimento;
    let tempoTrabalho = new Date().getFullYear() - anoIngressoEmpresa;

    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        alert("Idade: " + idade + " anos");
        alert("Tempo de Trabalho: " + tempoTrabalho + " anos");
        alert("Requerer aposentadoria");
    } else {
        alert("Idade: " + idade + " anos");
        alert("Tempo de Trabalho: " + tempoTrabalho + " anos");
        alert("Não requerer aposentadoria");
    }
}
