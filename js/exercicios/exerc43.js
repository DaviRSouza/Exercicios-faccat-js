export function faccat43() {
    alert('Classificação de Triângulos')

    let a = parseInt(prompt(`Digite o valor de A: `))
    let b = parseInt(prompt(`Digite o valor de B: `))
    let c = parseInt(prompt(`Digite o valor de C: `))
    let mens

    if ((a < b + c) && (b < a + c) && (c < a + b)){
        if((a==b)&&(b==c)){
            mens = "Triângulo Equilátero"
        }else if((a==b)||(b==c)||(a==c)){
            mens = "Triângulo Isóceles"
        }else{
            mens = "Triângulo Escaleno"
        }
    }else{
        mens = "Não é possível formar um triângulo"
    }
    alert(`O valor inserido é: ${mens}`)
}