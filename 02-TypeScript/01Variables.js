/// 01 variables.ts
///npm install -g typescript
//////Tipos de Datos
/////ya no permite cambiar el tipo de dato de una variable
var nombre = 'Fernando';
var nombre2 = 'Fernando2';
nombre = 'Gabriel';
var edad = 32;
var casalo = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
//////duck typing
var apellido = 'fernando';
apellido = 'Fernandoo';
apellido.toUpperCase();
//apellido=1;  saldria error.
/////////// hacer un let any para variable como Javascript
////mejor evitarla
var marihuana = 2;
console.log(marihuana);
marihuana = '2';
console.log(marihuana);
marihuana = true;
console.log(marihuana);
marihuana = function () { return '2'; };
console.log(marihuana);
//////////////////
var edadMultiple = '2';
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 22222;
