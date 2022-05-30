//07 promesas
///las promesas nos ayudadn con el codigo asincrono de java

const fs =require('fs');


function promesaEsPar(numero){

    const miPrimerPromesa = new Promise(
        (
            resolve,
            reject
        ) => {
            if (numero % 2 === 0) {
                resolve(numero);
            }else {
                reject("No es par")
            }
        }
    )
    return miPrimerPromesa;



}



promesaEsPar(16)
    .then( //return
        (respuesta) =>{
            console.log("Respuesta: ", respuesta)
        }
    )
    .catch( //throw
        (error) =>{
            console.error('Error: ', error)
        }
    )
    .finally( //finally
        ()=>{
            console.info('Fin');
        }
    )

////////////////////////////////////////////////////////////////// otra funcion Promesa

function promesaElevarAlCuadrado(numero){

    const miPrimerPromesa = new Promise(
        (resolve,  ///siempre obligatorio
                reject
        ) => {
            const numeroElevadoAlCuadrado= Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);   /// return elevado al cuadrado
        }
    )
    return miPrimerPromesa

}

/////////////////////////////////////////////////////////////// Meter una promesa dentro de otra
promesaEsPar(18)
    .then( //return
        (numeroPar) =>{
            return promesaElevarAlCuadrado(numeroPar)///// para concatenar a otra promesa, siempre debe de tener un return, aqui se llama a la promesa
        }
    )
    /////////////////// Aqui vamos a unirle a otra promesa , y podemos aumentarle las veces que sea el 'then'

    .then(
        (numeroParRetornadoElevadoAlCuadrado)=> {

            console.log('numeroParRetornadoElevadoAlCuadrado',numeroParRetornadoElevadoAlCuadrado)
        }


    )
    .catch( //throw
        (error) =>{
            console.error('Error: ', error)
        }
    )
    .finally( //finally
        ()=>{
            console.info('Fin');
        }
    )