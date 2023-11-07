export function faccat09() {
    alert('Reajuste de salario')
    let continua = true
    while (continua) {
        let salario = parseFloat(prompt('Digite o Salario do funcionario'))
        let Reajuste = parseFloat(prompt('Digite a porcentagem do reajuste'))

        if (isNaN(salario) || isNaN(Reajuste)) {alert('Digite um numero valido')}
        else if (salario == 0 || Reajuste == 0) {alert('Os numeros devem ser maiores que 0')}
        else{ 
            let nsalario = salario + (salario*(Reajuste/100))

            alert(`Salario antigo: ${salario}\nValor do reajuste: ${Reajuste}%\nSalario apos o reajuste: ${nsalario}`)
        }
        if (!window.confirm('deseja continuar?')){continua = false}
    }
}