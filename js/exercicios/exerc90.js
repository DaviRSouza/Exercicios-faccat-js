export function faccat90(){
    alert("Contagem de Número em Vetor");

    const tamanhoDoVetor = 30;
    let vetor = new Array(tamanhoDoVetor);
    
    for (let i = 0; i < tamanhoDoVetor; i++) {
      vetor[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    
    let numeroAContar = parseFloat(prompt("Digite um número a ser contado:"));
    
    let contagem = 0;
    
    for (let i = 0; i < tamanhoDoVetor; i++) {
      if (vetor[i] === numeroAContar) {
        contagem++;
      }
    }
    
    alert(`O número ${numeroAContar} aparece ${contagem} vezes no vetor.`);
        
}