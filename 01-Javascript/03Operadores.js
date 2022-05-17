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

