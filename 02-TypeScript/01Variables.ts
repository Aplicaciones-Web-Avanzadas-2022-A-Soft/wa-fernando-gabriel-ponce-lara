/// 01 variables.ts
///npm install -g typescript

//////Tipos de Datos
/////ya no permite cambiar el tipo de dato de una variable
let nombre:string = 'Fernando';
let nombre2:string = 'Fernando2';


nombre ='Gabriel';
let edad: number = 32;
let casalo: boolean=false;
let fecha:Date=new Date();
let sueldo: number;
sueldo=12.4;


//////duck typing

let apellido='fernando'
apellido = 'Fernandoo'
apellido.toUpperCase();
//apellido=1;  saldria error.

/////////// hacer un let any para variable como Javascript
////mejor evitarla

let marihuana:any=2;
console.log(marihuana);
marihuana='2';
console.log(marihuana);
marihuana=true;
console.log(marihuana);
marihuana=()=> '2';
console.log(marihuana);

//////////////////

let edadMultiple: number | string | Date ='2';

edadMultiple='2';

edadMultiple='dos';
edadMultiple=new Date();
edadMultiple=22222;
