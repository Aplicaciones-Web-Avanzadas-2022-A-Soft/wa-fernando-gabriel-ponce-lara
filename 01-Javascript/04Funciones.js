// 04 funciones.js


//// no define el tipo de dato por lo tanto tampo da el tipo de funcion.

/// permite el uso de funciones sin validaciones.
function soloNumeros(a,b,c){

        return a-b+c; // valor a devolver

}
console.log(soloNumeros(10,5,7,9,10));



function soloLetras(a,b,c){ //undefined
    console.log(a,b,c);
}

//////////////////////funciones con nombre

function FuncionNombrada(){}

////////////////////Funciones Anonimas

const funcionesSinNombre1= function (){};
var funcionesSinNombre2= function (){};
let funcionesSinNombre3= function (){};
////////////////////
[].forEach(function (){});
    funcionesSinNombre1();
    funcionesSinNombre2();
    funcionesSinNombre3();


/////// Funciones anonimas con Fat Arrow functions
///Vamos a preferir escribir este tipo de funciones

const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};

[].forEach(()=>{})
    funcionFatArrow1();
    funcionFatArrow2();
    funcionFatArrow3();

