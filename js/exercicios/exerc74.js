export function faccat74(){
    alert("Tabuada de 1 a 10");

    for (let i = 1; i <= 10; i++) {
        alert(`Tabuada do ${i}:`);
        for (let j = 1; j <= 10; j++) {
            alert(`${i} x ${j} = ${i * j}`);
        }
    }
}