///05 Destructuracion de objetos


/// Destructuracion de objetos

const fernando={

    nombre:"Fernando"
};

const carolina = {
    nombre: "Carolina",
    apellido:"Ponce",
    estado:"solteria"
};

////////////////////////////Que pasaria si uniramos los 2 objetos anteriores

/////////////////////
////Fusionar 2 objetos y si sus propiedades de repiten toma el valor de la propiedad del ultimo objeto

const fernandoCarolina = { // Creando una nueva referencia
        ...carolina,      /// el orden es importante para propiedades que se repiten
        ...fernando,    /// el ultimo remmplaza a los anteriores

};

console.log('fernandoCarolina',fernandoCarolina);
//////////////////Destructuracion de Arreglos

const arreglo1=[1,2,3,4,5,6,7,8];
const arreglo2=[9,10,11,12,13,14,15,16];

const superarreglo=[
    ...arreglo1,   /// el orden importa
    ...arreglo2
];

console.log('superArreglo',superarreglo);
console.log(...superarreglo);


