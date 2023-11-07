export function faccat36() {
    alert("Cálculo de Soma e Produto de Idades");

    let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
    let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
    let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
    let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

    let homemMaisVelho, homemMaisNovo, mulherMaisNova, mulherMaisVelha;

    if (idadeHomem1 > idadeHomem2) {
    homemMaisVelho = idadeHomem1;
    homemMaisNovo = idadeHomem2;
    } else {
    homemMaisVelho = idadeHomem2;
    homemMaisNovo = idadeHomem1;
    }

    if (idadeMulher1 > idadeMulher2) {
    mulherMaisVelha = idadeMulher1;
    mulherMaisNova = idadeMulher2;
    } else {
    mulherMaisVelha = idadeMulher2;
    mulherMaisNova = idadeMulher1;
    }

    let somaIdades = homemMaisVelho + mulherMaisNova;
    let produtoIdades = homemMaisNovo * mulherMaisVelha;

    alert("Soma das idades do homem mais velho com a mulher mais nova: " + somaIdades);
    alert("Produto das idades do homem mais novo com a mulher mais velha: " + produtoIdades);
}