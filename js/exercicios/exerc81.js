export function faccat81(){
    alert("Encontre o Maior e o Menor Elemento e suas Posições no Vetor");

    let Q = new Array(20);
    let maiorElemento = Number.NEGATIVE_INFINITY;
    let menorElemento = Number.POSITIVE_INFINITY;
    let posicaoMaiorElemento;
    let posicaoMenorElemento;

    for (let i = 0; i < 20; i++) {
        do {
            Q[i] = parseFloat(prompt(`Digite o número positivo na posição ${i + 1}:`));
        } while (Q[i] <= 0);

        if (Q[i] > maiorElemento) {
            maiorElemento = Q[i];
            posicaoMaiorElemento = i;
        }

        if (Q[i] < menorElemento) {
            menorElemento = Q[i];
            posicaoMenorElemento = i;
        }
    }
    alert(`O maior elemento de Q é ${maiorElemento} e ele ocupa a posição ${posicaoMaiorElemento + 1} no vetor.`);
    alert(`O menor elemento de Q é ${menorElemento} e ele ocupa a posição ${posicaoMenorElemento + 1} no vetor.`);
}