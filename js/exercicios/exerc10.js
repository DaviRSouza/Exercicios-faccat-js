export function faccat10() {
    alert('Calcular o custo de um carro novo')
    let continua = true
    while (continua) {
        let valorFabrica = parseFloat(prompt('Digite o custo de fabrica do carro'))

        if (isNaN(valorFabrica)) {alert('Digite um numero valido')}
        else if (valorFabrica == 0) {alert('Os numeros devem ser maiores que 0')}
        else{
            custoCliente = valorFabrica+(valorFabrica*0.28)+(valorFabrica*0.45)

            custoCliente = custoCliente.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            valorFabrica = valorFabrica.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

            alert(`Valor do carro na fabrica: ${valorFabrica}\nPercentual do distribuidor: 28%\nValor de impostos: 45%\nValor do cliente: ${custoCliente}`)
        }
        if (!window.confirm('deseja continuar?')){continua = false}
    }
}