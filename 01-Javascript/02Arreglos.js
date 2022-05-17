///ARREGLOS

///eS IGUAL QUE CUALRUIER OTRA VARIABLE
console.log("-----  arreglos-----------");

let arreglo = [6,7,8,9,10];
console.log(arreglo);
arreglo = 1 ;
console.log(arreglo);
arreglo =true;
console.log(arreglo);
arreglo = undefined;
console.log(arreglo);
arreglo =null;
console.log(arreglo);
arreglo= {};
console.log(arreglo);
arreglo = [true,1,1,"fernando",'Ponce',undefined,null,{},[1,2]];
console.log(arreglo);
arreglo = [6,7,8,9,10];
console.log(arreglo);

////////////////

console.log("------Iterar Arreglos!!!!!!");


//for of
for (let numero of arreglo){    // valores
    console.log('numero',numero);
}

//for in
for (let indice in arreglo){    // indices
    arreglo[indice];
    console.log('indice',indice);
}

// for ////
let objetoPrueba = { a:'1',b:'2',c:'3',}

for (let llave in objetoPrueba){  // llave
    console.log('llave',llave);
}


console.log("---------- OPERAR CON ARREGLOS------");
//agregar elementos
arreglo.push(11);
console.log(arreglo);
// eliminar el final de un elemento
arreglo.pop();
console.log(arreglo);
// agregar al principio de un arreglo
arreglo.unshift(5);
console.log(arreglo);
//splice
arreglo.splice(0,0,4);
console.log(arreglo);
const indiceNueve =arreglo.indexOf(9); /// encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueve,2);

console.log(arreglo);
