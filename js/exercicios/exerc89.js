export function faccat89(){
    alert("Comparação de Vetores V1 e V2");

    let V1 = new Array(15);
    let V2 = new Array(15);
    let contagemDeIguais = 0;
    
    alert("Leitura do vetor V1:");
    for (let i = 0; i < 15; i++) {
      V1[i] = parseFloat(prompt(`Digite o elemento V1[${i}]:`));
    }
    
    alert("Leitura do vetor V2:");
    for (let i = 0; i < 15; i++) {
      V2[i] = parseFloat(prompt(`Digite o elemento V2[${i}]:`));
    }
    
    for (let i = 0; i < 15; i++) {
      if (V1[i] === V2[i]) {
        contagemDeIguais++;
      }
    }
    
    alert(`Quantidade de elementos iguais nas mesmas posições: ${contagemDeIguais}`);      
}