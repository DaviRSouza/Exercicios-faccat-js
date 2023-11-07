export function faccat30() {
    alert("Ordenação de Três Valores em Ordem Crescente");

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"));
    
    let valorMenor, valorMeio, valorMaior;
    
    // Encontre o valor mais baixo
    if (valor1 < valor2 && valor1 < valor3) {
      valorMenor = valor1;
      if (valor2 < valor3) {
        valorMeio = valor2;
        valorMaior = valor3;
      } else {
        valorMeio = valor3;
        valorMaior = valor2;
      }
    } else if (valor2 < valor1 && valor2 < valor3) {
      valorMenor = valor2;
      if (valor1 < valor3) {
        valorMeio = valor1;
        valorMaior = valor3;
      } else {
        valorMeio = valor3;
        valorMaior = valor1;
      }
    } else {
      valorMenor = valor3;
      if (valor1 < valor2) {
        valorMeio = valor1;
        valorMaior = valor2;
      } else {
        valorMeio = valor2;
        valorMaior = valor1;
      }
    }
    
    alert("Valores em ordem crescente: " + valorMenor + ", " + valorMeio + ", " + valorMaior);
}