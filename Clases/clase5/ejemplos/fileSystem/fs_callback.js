const fs = require('fs')

fs.writeFile('.archivo.txt', 'Hola Mundo', (error) => {
    // if(error) throw new Error (error)
    if (error) console.log('Error al escribir')

    fs.readFile('./archivo.txt', (error, resultado) => {
        if (error) console.log(('Error al leer', error))

        console.log(resultado)

        fs.appendFile('./archivo.txt', '\n Termina aca', (error) => {
            if (error) console.log('Error al escribir', error)

            fs.readFileSync('.archivo.txt', (error, resultado) => {
                if (error) console.log("error al leer", error);

                console.log(resultado);

                fs.unlink('.archivo.txt', (error) => {
                    if (error) console.log('Error al borrar', error);
                })
            })
        })
    })
})
