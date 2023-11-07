export function faccat39() {
    alert("Avaliação de Expressões Lógicas");

    let A = true;  // V
    let B = true;  // V
    let C = false; // F

    let resultadoA = (A && B) || (A ^ B);

    let resultadoB = (A || B) && (A && C);

    let resultadoC = A || (C && B) ^ (A && !B);

    alert("a) Resultado: " + resultadoA);
    alert("b) Resultado: " + resultadoB);
    alert("c) Resultado: " + resultadoC);
}