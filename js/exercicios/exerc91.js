export function faccat91(){
    alert("Verificação de Números Repetidos em Vetor");

    let VET = new Array(50);
    
    for (let i = 0; i < 50; i++) {
      VET[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    
    let numerosRepetidos = [];
    let posicoesDosRepetidos = [];
    
    for (let i = 0; i < 50; i++) {
      for (let j = i + 1; j < 50; j++) {
        if (VET[i] === VET[j]) {
          if (!numerosRepetidos.includes(VET[i])) {
            numerosRepetidos.push(VET[i]);
          }
          if (!posicoesDosRepetidos.includes(i)) {
            posicoesDosRepetidos.push(i);
          }
          if (!posicoesDosRepetidos.includes(j)) {
            posicoesDosRepetidos.push(j);
          }
        }
      }
    }
    
    if (numerosRepetidos.length > 0) {
      alert("Números repetidos no vetor:");
      for (let i = 0; i < numerosRepetidos.length; i++) {
        alert(`Número ${numerosRepetidos[i]} nas posições: ${posicoesDosRepetidos.filter((pos) => VET[pos] === numerosRepetidos[i]).join(", ")}`);
      }
    } else {
      alert("Não há números repetidos no vetor.");
    }
}