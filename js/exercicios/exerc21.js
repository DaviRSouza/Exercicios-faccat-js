export function faccat21() {
    alert("Cálculo da Duração do Jogo de Xadrez");

    let horaInicio = parseInt(prompt("Digite a hora de início do jogo (apenas horas inteiras):"));
    let horaFim = parseInt(prompt("Digite a hora de fim do jogo (apenas horas inteiras):"));

    let duracao;

    if (horaInicio <= horaFim) {
    duracao = horaFim - horaInicio;
    } else {
    duracao = 24 - horaInicio + horaFim;
    }

    alert("Duração do jogo em horas: " + duracao);
}