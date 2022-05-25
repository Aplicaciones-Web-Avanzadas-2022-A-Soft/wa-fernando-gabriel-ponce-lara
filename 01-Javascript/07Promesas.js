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
    return miPrimerPromesa



}


promesaEsPar(20)
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
