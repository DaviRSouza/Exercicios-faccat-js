export function faccat80(){
    alert("Encontre o Maior Elemento e sua Posição no Vetor");

    let Q = new Array(20);
    let maiorElemento = Number.NEGATIVE_INFINITY;
    let posicaoMaiorElemento;

    for (let i = 0; i < 20; i++) {
        do {
            Q[i] = parseFloat(prompt(`Digite o número positivo na posição ${i + 1}:`));
        } while (Q[i] <= 0);

        if (Q[i] > maiorElemento) {
            maiorElemento = Q[i];
            posicaoMaiorElemento = i;
        }
    }

    alert(`O maior elemento de Q é ${maiorElemento} e ele ocupa a posição ${posicaoMaiorElemento + 1} no vetor.`);
}