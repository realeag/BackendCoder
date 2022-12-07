const fs = require ('fs')

let nombre = "Alan"
fs.writeFileSync('./texto.txt', `Hola ${nombre}`, 'utf-8') // CREAMOS EL ARCHIVO

if(fs.existsSync('./texto.txt')){
    let texto = fs.readFileSync('./texto.txt', 'utf-8') // LEEMOS EL ARCHIVO
    console.log(texto)

    fs.appendFileSync('./texto.txt', '\nEste es el final del texto') // ESCRIBIMOS EL ARCHIVO

    texto = fs.readFileSync('./texto.txt', 'utf-8')
    console.log(texto)

    fs.unlinkSync('./texto.txt') // BORRAMOS EL ARCHIVO
    console.log('Archivo borrado')
}


