// Mutables

var numero1=1 ;
    let numero2=2 ;
    /// aqui cambiemos
    numero1=5;
    numero2=7;

    /// es mejor usar la let
    /// de ser posible nunca usar let
    /// es por el alcance de las variables

// inmutables

const esto="pdf";

// la jerarquia es esta cont > let > var.


////////////////////////////////////////////////////////////////////////
//TIPOS DE VARIALBES

//tiene 5 tipos de variables primitivas
    const numero= 1; //number
    const sueldo=1.2; //number
    const texto="Fernando"; // string
    const booleano=false;  // boleano
    const hijos = null; // object
    const zapatos= undefined;  //undefined

// conocer el tipo de variable

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); //NaN

/// TRUTY FALSY

if (true === true){
    console.log("es verdadero");
}else{
        console.log("es falso");
}

if (true === false){
    console.log("es verdadero");
}else{
    console.log("es falso");
}
// probando un string vacio
if (""){
    console.log("string vacio es verdader");
}else{
    console.log("string vacio es falso");
}



///// comprobar otrso valor del tipo truty y falsys

console.log("estos son valores no vacios");

if ("Adrian"){
    console.log("string no vacio es verdader");
}else{
    console.log("string no vacio es falso");
}

if (-1){
    console.log("un negativo es verdader");
}else{
    console.log("un negativo es falso");
}

if (0){
    console.log("un cero es verdader");
}else{
    console.log("un cero es falso");
}

// conslusion : cuando esta vacio es falso y cuando es positivos es verdadero.

// Objetos JSON

const fernandito = {
    //llave: "valor",
    nombre: "fernando",
    edad: 25,
    hijos: null,
    casado:true,
    ropa:{ color:'plomo',talla:'40'} ,   /// el valor de los json internos debe estar entre comillas simples
    mascotas: ['heidy','milena'],

};

console.log(fernandito);
///////ACCEDER A LAS PROPIEDADES DEL OBJETO

        console.log(fernandito.edad);
        console.log(fernandito.nombre);
//MODIFICAR LAS el valor de lasLLAVES DE UN OBJETO
        fernandito.edad=24;
        console.log(fernandito.edad);

        fernandito["apellido"]="lara";
//crear nuevos atributos dentro de un objeto

fernandito.ex="katy";
console.log(fernandito);

//borrar el valor de una propiedad , encerar o eliminar
fernandito.nombre=undefined;
console.log(fernandito);
delete  fernandito.nombre;
console.log(fernandito);
fernandito.nombre="fernandito";
console.log(fernandito);




////Varialbe por valor o referencia // en primitivas

// Cuando a un valor se le asigna otro valor usando una referencia este toma el valor de la referencia

let edadFercho=25;
let edadGabro=edadFercho;
console.log(edadFercho);
console.log(edadGabro);
edadGabro=edadGabro+5;
console.log(edadFercho);
console.log(edadGabro);

//VARIABLES POR REGERENCIA

console.log("valores por referencia");

let notas = {
    total : 10
};


let notasSegundoBimestre = notas;

notasSegundoBimestre.total=notasSegundoBimestre.total + 1 ;
console.log(notas);
console.log(notasSegundoBimestre);

// las dos cambian de valor por son el mismo objeto
notas.total = notas.total +1 ;
console.log(notas);
console.log(notasSegundoBimestre);


//// como clonar objetos
console.log("----------------");
// si no se clona tambien al trabajar con este valor cambia el valor de la referencia
let notasTercerBimestre= Object.assign({},notas);
// object.assight([],arreglo);

notasTercerBimestre.total=notasTercerBimestre.total +1 ;
console.log('notas',notas);
console.log('notasSegundoBimestre',notasSegundoBimestre);
console.log('notasTercerBimestre',notasTercerBimestre);

//////////////////////////////////////////////////











