export function faccat85(){
    alert("Cálculo de Temperaturas Anuais");

    const diasNoAno = 365;
    let temperaturas = new Array(diasNoAno);
    
    for (let dia = 0; dia < diasNoAno; dia++) {
      temperaturas[dia] = parseFloat(prompt(`Digite a temperatura média do dia ${dia + 1}:`));
    }
    
    let menorTemperatura = temperaturas[0];
    let maiorTemperatura = temperaturas[0];
    let somaTemperaturas = temperaturas[0];
    
    for (let dia = 1; dia < diasNoAno; dia++) {
      let temperatura = temperaturas[dia];
      if (temperatura < menorTemperatura) {
        menorTemperatura = temperatura;
      }
      if (temperatura > maiorTemperatura) {
        maiorTemperatura = temperatura;
      }
      somaTemperaturas += temperatura;
    }
    
    let temperaturaMediaAnual = somaTemperaturas / diasNoAno;
    
    let diasInferioresAMedia = 0;
    for (let dia = 0; dia < diasNoAno; dia++) {
      if (temperaturas[dia] < temperaturaMediaAnual) {
        diasInferioresAMedia++;
      }
    }
    
    alert(`Menor temperatura do ano: ${menorTemperatura}`);
    alert(`Maior temperatura do ano: ${maiorTemperatura}`);
    alert(`Temperatura média anual: ${temperaturaMediaAnual}`);
    alert(`Número de dias no ano em que a temperatura foi inferior à média anual: ${diasInferioresAMedia}`);
    
}