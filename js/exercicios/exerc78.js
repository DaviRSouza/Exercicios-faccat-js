export function faccat78(){
    alert("Leitura de Nomes e Pesquisa");

    let nomes = [];

    for (let i = 1; i <= 10; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i}:`);
        nomes.push(nome);
    }

    let nomePesquisado = prompt("Digite o nome a ser pesquisado:");

    let encontrado = false;

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomePesquisado) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("ACHEI");
    } else {
        alert("NÃO ACHEI");
    }

}