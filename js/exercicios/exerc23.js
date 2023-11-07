export function faccat23() {
    alert("Cálculo do Peso Ideal");

    let nome = prompt("Digite o nome da pessoa:");
    let altura = parseFloat(prompt("Digite a altura (em metros):"));
    let sexo = prompt("Digite o sexo (M para masculino ou F para feminino):");

    let pesoIdeal;

    if (sexo === 'M' || sexo === 'm') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'F' || sexo === 'f') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        alert("Sexo não reconhecido. Por favor, digite M ou F.");
        return
    }

    alert("Nome: " + nome);
    alert("Altura: " + altura + " metros");
    alert("Sexo: " + (sexo === 'M' || sexo === 'm' ? "Masculino" : "Feminino"));
    alert("Peso Ideal: " + pesoIdeal.toFixed(2) + " kg");
}