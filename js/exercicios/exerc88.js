export function faccat88(){
    alert("Verificação e Remoção de Número em Vetor");

    let vetor = new Array(20);
    
    for (let i = 0; i < 20; i++) {
      vetor[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    
    let numeroVerificar = parseFloat(prompt("Digite um número a ser verificado e possivelmente removido:"));
    
    let numeroEncontrado = false;
    let novoVetor = [];
    
    for (let i = 0; i < 20; i++) {
      if (vetor[i] === numeroVerificar) {
        numeroEncontrado = true;
      } else {
        novoVetor.push(vetor[i]);
      }
    }
    
    if (numeroEncontrado) {
      alert("O número foi encontrado no vetor e removido.");
      alert("Novo vetor sem o número:");
      alert(novoVetor);
    } else {
      alert("O número não foi encontrado no vetor.");
      alert("Vetor original:");
      alert(vetor);
    }
    
}