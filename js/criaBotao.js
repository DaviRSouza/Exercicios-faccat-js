import botoesInfo from "./sumario.js";
console.log(botoesInfo);

const botoesContainer = document.getElementById('botoesContainer');

botoesInfo.forEach(info => {
    const botao = document.createElement('button');
    botao.textContent = info.nome;

    botao.addEventListener('click', () => {
        info.funcao();
    });

    botoesContainer.appendChild(botao);
});