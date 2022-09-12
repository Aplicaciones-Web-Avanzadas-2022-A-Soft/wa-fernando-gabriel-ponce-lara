import {Pool} from 'pg'
//npm install pg
///npm install --save @types/pg

let conn: any

if(!conn){

    conn =new Pool({///

        user:'postgres',
        password:'fernando',
        host:'localhost',
        port:5432,
        database:'escuelaestudiante'


    });
}
export {conn};

