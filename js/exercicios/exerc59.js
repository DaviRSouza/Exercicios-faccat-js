export function faccat59(){
    alert("Contagem de Valores Negativos");

    let contadorNegativos = 0;

    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(prompt(`Digite o valor ${i}:`));
        
        if (valor < 0) {
            contadorNegativos++;
        }
    }

    alert(`Dos 10 valores digitados, ${contadorNegativos} são negativos.`);

}