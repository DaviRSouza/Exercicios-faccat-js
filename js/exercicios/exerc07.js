export function faccat07() {
    
    alert('Calculo de dias de vida')
    let continua = true
    while (continua) {
        let ano = parseInt(prompt('Digite os anos de vida que você tem'))
        let mes = parseInt(prompt('Digite os mes'))
        let dia = parseInt(prompt('Digite os dias'))
        if (isNaN(ano) || isNaN(mes) || isNaN(dia))  {'Digite um numero valido'}
        else{ 
            diaVida = ano*365
            diaVida += mes*30
            diaVida += dia
            alert(`O total de tempo de vida é ${diaVida}`)
        }
        if (!window.confirm('deseja continuar?')){continua = false}
    }
}
