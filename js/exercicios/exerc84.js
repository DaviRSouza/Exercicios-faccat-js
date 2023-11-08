export function faccat84(){
    alert("Leitura e Soma de Vetores");

    let N = parseInt(prompt("Digite o tamanho dos vetores (N):"));
    let A = new Array(N);
    let B = new Array(N);
    let Soma = new Array(N);
    
    alert("Leitura do vetor A:");
    for (let i = 0; i < N; i++) {
      A[i] = parseFloat(prompt(`Digite o elemento A[${i}]:`));
    }
    
    alert("Leitura do vetor B:");
    for (let i = 0; i < N; i++) {
      B[i] = parseFloat(prompt(`Digite o elemento B[${i}]:`));
    }
    
    for (let i = 0; i < N; i++) {
      Soma[i] = A[i] + B[i];
    }
    
    alert("Vetor Soma:");
    for (let i = 0; i < N; i++) {
      alert(`Soma[${i}] = ${Soma[i]}`);
    }
    
}