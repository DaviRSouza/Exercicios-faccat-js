export function faccat27(){
    let valor = parseFloat(prompt("Digite um valor:"));
    let mensagem;

    if (valor > 0) {
    mensagem = "Positivo";
    } else if (valor < 0) {
    mensagem = "Negativo";
    } else {
    mensagem = "Zero";
    }

    alert("O valor é " + mensagem);
}