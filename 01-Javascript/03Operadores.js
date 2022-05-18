const arreglo = [
    {
        id: 1,
        nombre: 'Fernando',
        nota: 7
    },
    {
        id: 2,
        nombre: 'Gabriel',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

console.log(arreglo);


/////// Funciones como parametros
///FIND
///enviamos una expresion "puede ser un truty o falsy"

const respuestaFind= arreglo
    .find(
        function (valorActual,indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return  valorActual.nombre === "Cristian";


        }

    );
console.log('respuestaFind',respuestaFind);

//////Find Index

const respuestaIndex = arreglo
    .findIndex(
            function (valorActual,indiceActual,arregloCompleto){
                    return valorActual.nombre=== "Ramiro";


            }


    );
console.log('respuestaIndex',respuestaIndex);   ///  si no encuentra es -1


//////for each

console.log("for EACh");

const respuestaForEach=arreglo
    .forEach(
            function (valorActual,indiceActual,arregloCompleto){
                    console.log('valorActual',valorActual);

            }

    );
    console.log('respuestaForEach',respuestaForEach); // undefined

//////MAP nos ayuada a modificar o mutar un nuevo arreglo.

console.log("-----------MAP------");

const respuestaMap = arreglo

    .map(
        (valorActual,indiceActual,arregloCompleto)=>{
            const nuevoElemento = {
                id:valorActual.id,
                nombre:valorActual.nombre,
                nota:valorActual.nota+1,
                casado:false

            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap',respuestaMap);
console.log('arreglo',arreglo);


////////////filter
/// enviamos un truty falsy
//// devuelve los elementos que cumplen esa condicion
console.log("-----------FILTER------");

const respuestaFilter = arreglo

    .filter(
        (valorActual,indiceActual,arregloCompleto)=> {
            return valorActual.nota >= 16;

        }
    );

console.log('respuestaFilter',respuestaFilter);
console.log('arreglo',arreglo);


////////////SOME => expresion
/// Devuelve booleano
//// devuelve los elementos si ALGUNO de los elementos que cumplen esa condicion
// OR
console.log("-----------SOME------");
const respuestaSome = arreglo
    .some(
        function (valorActual,indicadorActual,arregloCompleto){
                return valorActual.nota<9;
        }

    );
console.log('respuestaSome',respuestaSome);
console.log('arreglo',arreglo);

////////////EVERY => expresion
/// tODAS las notas cumplen esta condicion
// Devuelve booleano
//// devuelve si TODOS los elementos que cumplen esa condicion
// AND
console.log("-----------EVERY------");
const respuestaEvery = arreglo
    .every(
        function (valorActual,indicadorActual,arregloCompleto){
            return valorActual.nota>9;
        }

    );
console.log('respuestaSome',respuestaEvery);
console.log('arreglo',arreglo);


/////////////////// Reduce  izquierda a derecha
////////////////tambien a hay reduce right

console.log("-----------REDUCE------");
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado,valorActual,indiceActual,arreglo){
            return (valorAcumulado+valorActual.nota);
        },
        0///acumulador ---valor inicial
    );
console.log('respuestaReduce',respuestaReduce);  //// 100 - x
console.log('arreglo',arreglo);

//////////////////

