const archivofs = require('fs');

function ejecucion(
    PrimerArchivo,//path o nombre
    SegundoArchivo,//path o nombre
    ArchivoCreado //path o nombre
) {
    const promesa= new Promise(
        (resolve, reject) => {
            archivofs.readFile(
                PrimerArchivo, // path del archivo
                'utf-8', // codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if (errorLecturaPrimerArchivo) {
                        console.error(errorLecturaPrimerArchivo);
                        reject('Error en primer archivo');
                    } else {

                        archivofs.readFile(
                            SegundoArchivo, // path del archivo
                            'utf-8', // codificacion
                            (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                                if (errorLecturaSegundoArchivo) {
                                    console.error(errorLecturaSegundoArchivo);
                                    reject('Error en segundo archivo');
                                } else {
                                    const nuevoContenido = contenidoPrimerArchivo + contenidoSegundoArchivo;
                                    /////escritura del Archivo Creado
                                    archivofs.writeFile(
                                        ArchivoCreado,
                                        nuevoContenido,
                                        (errorEscritura) => {
                                            if (errorEscritura) {
                                                console.error(errorEscritura);
                                                reject('Error al escribir en el nuevo archivo');
                                            } else {
                                                resolve('Completado');
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }

                }
            );
        }
    )
    return promesa;
}
ejecucion('archivo1', 'archivo2', 'archivoCreado.txt')
    .then(
        resolve => {
            console.log(resolve);
        }
    )
    .catch(
        error => {
            console.log(error);
        }
    )