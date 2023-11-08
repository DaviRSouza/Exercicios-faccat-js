export function faccat76(){
    alert("Desenho de Retângulo");

    for (let linha = 1; linha <= 10; linha++) {
        let desenho = "";
        for (let coluna = 1; coluna <= 60; coluna++) {
            if (linha === 1 || linha === 10 || coluna === 1 || coluna === 60) {
                desenho += "+";
            } else {
                desenho += " ";
            }
        }
        console.log(desenho);
    }
    alert("Olhe o console do navegador");
}