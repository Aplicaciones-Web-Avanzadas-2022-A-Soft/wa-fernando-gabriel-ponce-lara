import  { NextApiRequest, NextApiResponse } from 'next'

import {conn} from "../../../utils/database";

export default async (req:NextApiRequest,res:NextApiResponse) => {
const {method,body,query}=req;
/*if(method ==="GET"){

    res.status(200).json('getting escuelas')
} else if(method ==="POST") {
    res.status(200).json('creating escuelas')
}else{
        res.json("invalid method")
    }
 */
    switch (method){
        case 'GET':
            try{
                const query_="select * from escuela"
                const response=await conn.query(query_);
                console.log(response)
                return res.status(200).json('getting escuelas '+ response.rows)
            }catch (error:any){
                return res.status(400).json({error:error.message});
            }



        case 'POST':
            try {
                const {id_escuela,institucion,tipo_de_institucion,direccion,ranking_}=body;

                const query_="insert into escuela(id_escuela,institucion,tipo_de_institucion,direccion,ranking_) values($1,$2,$3,$4,$5) returning *"
                const values=[id_escuela,institucion,tipo_de_institucion,direccion,ranking_];
                const response=await conn.query(query_,values)

                return res.status(200).json('creando tareas '+response.rows[0])
            }catch (error){
                console.log(error)
            }
            ///no se porque aki va put


        default:
            return res.status(400).json("invalid method")



    }

}