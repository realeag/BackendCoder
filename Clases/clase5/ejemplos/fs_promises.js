const fs = require ('fs')

const fsPromises = async (nombreArchivo) => {
    try{
        await fs.promises.writeFile(nombreArchivo, 'Hola Mundo', 'utf-8')

        let texto = await fs.promises.readFile(nombreArchivo, 'utf-8')
            console.log(texto)

        await fs.promises.appendFile(nombreArchivo, '\nChau Mundo')

        texto = await fs.promises.readFile(nombreArchivo)
        console.log(texto)

        await fs.promises.unlink(nombreArchivo)

    } catch (error){
        console.log('Hubo un error', error)
    }
}

fsPromises('./texto.txt')