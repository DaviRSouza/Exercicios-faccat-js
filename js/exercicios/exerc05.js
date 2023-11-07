export function faccat05() {
    alert('Ler o numero antecessor do digitado')
    let continua = true
    while (continua) {
        let numero = parseInt(prompt('Digite um numero'))
        if (isNaN(numero)) {'Digite um numero valido';}
        else{ 
            let antecessor = numero - 1
            alert(`O numero ${numero} tem o antecessor ${antecessor}`)
        }
        if (!window.confirm('deseja continuar?')){continua = false}
    }   
}