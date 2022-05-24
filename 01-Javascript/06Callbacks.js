const fs = require('fs');   // file system
                            // / es una libreria // require pide libreria


///06 ejemplo.txt //// hola
console.log('primero');
fs.readFile(
    './06Ejemplo',
    'utf-8',
    (erroe,contenido)  => {
        console.log('segundo1');
    }

);

fs.readFile(
    './06Ejemplo',
    'utf-8',
    (erroe,contenido)  => {
        console.log('segundo2');
    }

);

console.log('tercero');


/////programacion asincrona   , el fs.readFile se ejecuta asincronamente
/// se debe intentar evitar el callback hell