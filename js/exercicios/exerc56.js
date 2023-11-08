export function faccat56(){
    alert("Tabuada de 1 a 10 de um valor entre 1 e 10:");

    let valor;

    do {
        valor = parseInt(prompt("Digite um valor entre 1 e 10:"));
    } while (valor < 1 || valor > 10);

    for (let i = 1; i <= 10; i++) {
        let resultado = valor * i;
        alert(`${valor} x ${i} = ${resultado}`);
    }
}