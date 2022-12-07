const { writeFile, readFile} = require('fs');

const fecha = new Date().toString()

writeFile('./fechayhora.txt', fecha, 'utf-8', (error) => {
    if (error) console.log('Hubo un error: ', error)

    readFile('./fechayhora.txt', 'utf-8', (error) => {
        if(error) console.log('Hubo otro error', error)
        console.log(resultado)
    })
})

