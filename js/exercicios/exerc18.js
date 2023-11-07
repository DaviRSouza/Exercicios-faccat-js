export function faccat18() {
    alert("Verificação de Elegibilidade para Votar");

    let anoAtual = new Date().getFullYear(); // Obtém o ano atual
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
    let idade = anoAtual - anoNascimento;

    if (idade >= 16) {
    alert("Você poderá votar este ano.");
    } else {
    alert("Você não poderá votar este ano.");
    }
}