export function faccat34() {
    alert('Teste de mesa')

    let x = parseInt(prompt(`Digite o valor de X:`))
    let y = parseInt(prompt(`Digite o valor de Y:`))
    let z = (x * y) + 5
    let resposta

    if (z <= 0) {
        resposta = "A"
    } else if (z <= 100) {
        resposta = "B"
    } else {
        resposta = "C"
    }
    alert(`A resposta e o valor de Z será: ${resposta},${z}.`)
}