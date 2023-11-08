export function faccat86(){
    alert("Ordenação de Vetor em Ordem Crescente");

    let vetor = new Array(10);
    for (let i = 0; i < 10; i++) {
      vetor[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    vetor.sort((a, b) => a - b);
    alert("Vetor ordenado em ordem crescente:");
    alert(vetor);    
}