const contador = () => {
    let counter = 1
    console.log('Iniciando el contador')
    let timer = setInterval(() => {
        console.log(counter++)
        if(contador > 5){
            clearInterval(timer)
        }
    }, 1000)
}

console.log('Empieza a contar')
contador()
console.log('Termina de contar')

