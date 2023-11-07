export function faccat31() {
    alert("Verificação de Triângulo");

    let ladoA = parseFloat(prompt("Digite o valor do lado A:"));
    let ladoB = parseFloat(prompt("Digite o valor do lado B:"));
    let ladoC = parseFloat(prompt("Digite o valor do lado C:"));

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("Os valores formam um triângulo.");
    } else {
    alert("Os valores não formam um triângulo.");
    }
}