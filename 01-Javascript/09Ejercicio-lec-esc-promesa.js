/////Concatenar Promes para lectura y Escritura


/*
Hacer una funcion que me acepte como parametro una variable
con el path del primer archivo, el path del segundo archivo
y el path del nuevo archivo.
Vamos a crear dos funciona una promesaLectura y una promesaEscritura
promesaLectura va a aceptar path de lectura
promesaEscritura va a aceptar path nuevo archivo y el contenido
- Promesa de lectura
- Promesa de escritura
* */


const fs = require('fs');   // file system
                            // / es una libreria // require pide libreria




function ejercicio(
    path1erArchivo,
    path2doArchivo,
    nombreNuevoArchivo,

){





}

/*
/----------
fs.writeFile (
    './06ArchivoPath.txt',
    'contenidoArchivo',
    (errorEscritura)=>{

    }
);

*/


function promesaEscritura(Archivo){

    const miPrimerPromesaEscritura = new Promise(
        (
            resolve,
            reject
        ) => {

            fs.writeFile (
                './09ArchivoPath.txt',
                'contenidoArchivo09Ejercicio',
                (errorEscritura)=>{

                }
            );
        }
    )
    return miPrimerPromesaEscritura;

}


function promesaLectura(Archivo){

    const miPrimerPromesaLectura = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.readFile(
                './01Variables.js',   //nombre del archivo
                'utf-8',                //codificacion
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        reject(errorLectura)   ////****** lo nuevo

                        else{


                            //*/*/**//*
                        }
                        throw new Error('Error leyendo el 2do archivo');


                    }
                }
            );

        }
    )
    return miPrimerPromesaLectura;

}


/////////////////////////// ASYNC AWAIT




