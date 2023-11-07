export function faccat06() {
    alert('Calculo de area de um retangulo')
    let continua = true
    while (continua) {
        let altura = parseInt(prompt('Digite a altura do seu retangulo'))
        if (isNaN(altura)) {'Digite um numero valido'}
        else{ 
            let base = parseInt(prompt('Digite a base do seu retangulo'))
            if (isNaN(base)) {'Digite um numero valido'}
            else{
                let area = altura * base
                alert(`A area do seu retangulo é ${area}`)
            }
        }
        if (!window.confirm('deseja continuar?')){continua = false}
    }
}