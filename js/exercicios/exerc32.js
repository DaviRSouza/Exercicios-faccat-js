export function faccat32() {
    alert("Determinação do Vencedor ou Empate em uma Partida");

    let time1 = prompt("Digite o nome do primeiro time:");
    let golsTime1 = parseInt(prompt("Digite o número de gols marcados pelo primeiro time:"));

    let time2 = prompt("Digite o nome do segundo time:");
    let golsTime2 = parseInt(prompt("Digite o número de gols marcados pelo segundo time:"));

    if (golsTime1 > golsTime2) {
        alert("Vencedor: " + time1);
    } else if (golsTime2 > golsTime1) {
        alert("Vencedor: " + time2);
    } else {
        alert("Empate");
    }
}