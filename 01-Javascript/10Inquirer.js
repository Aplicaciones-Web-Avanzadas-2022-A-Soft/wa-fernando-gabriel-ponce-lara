/////////11 inquirer
//////////npm init -> packag.json -> dependencias ->
// npm i inquirer = npm install inquirer
/////node_modules -> estan las dependencias

const inquirer = require('inquirer');

async function main(){

        try{

            const respuesta = await inquirer
                .prompt([
                    {
                            TYPE:'input',
                            name:'apellido',
                            message:'ingresa tu nombre'

                    },
                    {
                        TYPE:'input',
                        name:'edad',
                        message:'ingresa tu edad'

                    }


                ]);
            console.log('Respuesta',respuesta);
        }catch (e){
            console.error(e);

        }
}

main();


console.log('Convertir arreglos o Objeros en Stings')

////////Stringyfy y Parse

const arregloUsuarios = [
    {
        id:1,
        nombre:'Fernando',

    }

];
console.log('Convertir arreglos o Objeros en Stings');

const arregloGuardado = JSON.stringify(arregloUsuarios) ////convertir en Strins a arreglos u Objetos.

console.log('arregloGuardado',arregloGuardado);

/////////Proceso Inverso

console.log('ConvertirStrings en Objetos');

const arregloRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado',arregloRestaurado);

