export function faccat08() {
    alert('Mostrar o percentual de votos')
    let continua = true
    while (continua) {
        let eleitores = parseInt(prompt('Numero total de eleitores'))
        let validos = parseInt(prompt('Digite o total de votos validos'))
        let nulos = parseInt(prompt('Digite o total de votos nulos'))
        let brancos = parseInt(prompt('Digite o total de votos brancos'))

        if (isNaN(eleitores) || isNaN(validos) || isNaN(nulos) || isNaN(brancos)) {'Digite um numero valido'}
        else if (validos+nulos+brancos != eleitores) {
            alert('O numero de eleitores deve ser igual ao total de votos')
        }
        else{ 
            validos = (validos / eleitores) * 100
            nulos = (nulos / eleitores) * 100
            brancos = (brancos / eleitores) * 100

            alert(`Total de votos é: ${eleitores} \n Votos validos: ${validos.toFixed(2)}% \n Votos nulos: ${nulos.toFixed(2)}% \n Votos brancos: ${brancos.toFixed(2)}%`)
        }
        if (!window.confirm('deseja continuar?')){continua = false}

    }
}