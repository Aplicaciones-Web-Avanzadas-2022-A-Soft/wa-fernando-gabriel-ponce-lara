////https://www.youtube.com/watch?v=frm0CHyeSbE

////Callback es pasar como parametro una funcion a otra funcion######
////cuando pasa como parametro no lleva sus parentesis --- opcional


const operation = (numero1,numero2,callback) => {
    return callback(numero1,numero2)
}

console.log(operation(1,3,(a,b)=> a+b))
console.log(operation(1,3,(a,b)=> a-b))
console.log(operation(1,3,(a,b)=> a*b))

console.log("***********")

////https://www.youtube.com/watch?v=DaXuPcdKqQ4
function mensaje(nombre){
    console.log("Hola ",nombre)
}
mensaje("Luis")

console.log("***********")


////////los callback son para recibir un parametro como Funcion

function callback(){
        console.log("Yo soy un callback")
}

///recibe dicha Funcion y la ejecuta
function mensaje2(fn){
    fn();
}

mensaje2(callback);


console.log("***********")

function funcion1(fn){
    fn()
    console.log("mensaje 1 ")
}

function funcion2(){
    console.log("mensaje 2 ")
}

funcion1(funcion2)
