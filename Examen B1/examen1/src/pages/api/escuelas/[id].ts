import {NextApiRequest,NextApiResponse} from "next";
import {conn} from "../../../utils/database"

export default async (req:NextApiRequest,res:NextApiResponse)=>{

        const {method,query} = req;


        switch (method){
                case "GET":
                        try {
                                const text="select * from escuela where id_escuela=$1"   ///
                                const values=[query.id]
                                const result =await conn.query(text,values);

                                if (result.rows.left===0)
                                        return res.status(404).json({message:"escuela no Encontrada"}) ///

                                return res.json("getting unique escuela")//
                        }catch (error:any){
                                return res.status(500).json({message:error.message});
                        }

                case "PUT":
                        return res.json("getting unique escuela")//
                case "DELETE":
                        try {
                                const text="delete from escuela where id_escuela=$1 returning *"   ///
                                const values=[query.id]
                                const result =await conn.query(text,values);

                                if (result.rowCount===0)
                                        return res.status(404).json({message:"escuela no Encontrada"}) ///

                                return res.json("eliminando unique escuela")//
                        }catch (error:any){
                                return res.status(500).json({message:error.message});
                        }
                default:
                        return res.status(400).json("methos not allowed")


        }
}