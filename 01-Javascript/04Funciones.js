// 04 funciones.js


//// no define el tipo de dato por lo tanto tampoco da el tipo de funcion.

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


    //////////////////////////////////////////////////
const funcionFatarrow4 = () => {};

const funcionFatarrow5 = (x) => { return x+1};

const funcionFatarrow6 = (x) => x+1;  /// fat arrow funtions , una sola linea , omito return , omito llaves

const funcionFatarrow7 = (x) => x+1; ///, si solo tenemos un parametro, omito el parentesis

const funcionFatArrow8 = (x,y,z) => x+y+z;



///////////////// Funciones con parametros definidos

function sumarNumeros(...otrosNumeros) {
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {

            total = total + valorActual;
        }
    );
    return total   ;
        //return otros numeros.resuce((a,v) => a+v,0);

};

        sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13,14);

        console.log('sumar Numeros',sumarNumeros(1,2,3,4,5,8,9,7))






