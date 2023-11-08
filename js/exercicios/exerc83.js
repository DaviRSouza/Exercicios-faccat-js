export function faccat83(){
    alert("Leitura de 20 Números e Impressão na Ordem Inversa");

    let vetor = new Array(20);
    
    for (let i = 0; i < 20; i++) {
      vetor[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    
    alert("Números na ordem inversa:");
    
    for (let i = 19; i >= 0; i--) {
      alert(vetor[i]);
    }   
}