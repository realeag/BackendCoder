const temporizador = (callback, tiempo) =>{
    setTimeout(() => {
        console.log('Ejecutando tarea')
        callback()
    }, 2500)
}

const saludo = () => console.log(`Hola, todo bien?`)

console.log('Iniciando programa')
temporizador(saludo)
console.log('Terminando programa')