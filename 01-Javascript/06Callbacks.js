const fs = require('fs');   // file system
                            // / es una libreria // require pide libreria


///06 ejemplo.txt //// hola
console.log('Inicio');




//----------
fs.writeFile (
    './06ArchivoPath.txt',
    'contenidoArchivo',
    (errorEscritura)=>{

    }
);



//1)    leer archivo 06ejemplo.txt. luego imprimir en consonola
//2)    Despues del paso uni leer archivo 01-variable.js, luego imprimir en consola

//----------

fs.readFile(
    './06Ejemplo.txt',
    'utf-8',
    (errorLectura1,contenido)  => {
        if (errorLectura1) {
            throw new Error('error leyendo primer Archivo');
        } else {

            fs.readFile(
                './01Variables.js',
                'utf-8',
                (errorLectura2, contenido) => {
                    if (errorLectura2) {
                        console.error(errorLectura2);
                        throw new Error('Error leyendo el 2do archivo');


                    }
                }
            );
        }
    }
);



/////programacion asincrona   , el fs.readFile se ejecuta asincronamente
/// se debe intentar evitar el callback hell