export function faccat60(){
    alert("Contagem de Valores no Intervalo [10, 20]");

    let contadorDentroDoIntervalo = 0;
    let contadorForaDoIntervalo = 0;

    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(prompt(`Digite o valor ${i}:`));
        
        if (valor >= 10 && valor <= 20) {
            contadorDentroDoIntervalo++;
        } else {
            contadorForaDoIntervalo++;
        }
    }

    alert(`Dos 10 valores digitados, ${contadorDentroDoIntervalo} estão dentro do intervalo [10, 20] e ${contadorForaDoIntervalo} estão fora deste intervalo.`);
}