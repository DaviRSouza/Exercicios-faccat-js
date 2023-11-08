export function faccat87(){
    alert("Ordenação e Inserção em Vetor em Ordem Crescente");

    let vetor = new Array(10);
    
    for (let i = 0; i < 10; i++) {
      vetor[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    
    vetor.sort((a, b) => a - b);
    
    let novoNumero = parseFloat(prompt("Digite um novo número:"));
    
    let posicaoInsercao = 0;
    
    while (posicaoInsercao < vetor.length && novoNumero > vetor[posicaoInsercao]) {
      posicaoInsercao++;
    }
    
    vetor.splice(posicaoInsercao, 0, novoNumero);
    
    alert("Vetor ordenado com o novo número inserido:");
    alert(vetor);
    
}