export function faccat82(){
    alert("Cálculo do Vetor M");

    let A = new Array(10);
    let X;
    let M = new Array(10);
    
    for (let i = 0; i < 10; i++) {
      A[i] = parseFloat(prompt(`Digite o número na posição ${i + 1} do vetor A:`));
    }
    
    X = parseFloat(prompt("Digite o número X:"));
    
    for (let i = 0; i < 10; i++) {
      M[i] = A[i] * X;
    }
    
    alert("Vetor M:");
    for (let i = 0; i < 10; i++) {
      alert(`M[${i}] = ${M[i]}`);
    }    
}