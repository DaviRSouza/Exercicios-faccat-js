export function faccat12() {
    alert("Conversão de Fahrenheit para Celsius");

    let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);

    alert("Temperatura em graus Celsius: " + temperaturaCelsius.toFixed(2));
}