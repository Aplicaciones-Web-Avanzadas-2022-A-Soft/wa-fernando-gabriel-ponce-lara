///coneccion y consulta de base de datos
import  { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '../../utils/database'
///son interfaces
type Data={
  message:string;
  time:string
}



export default async (req:NextApiRequest, res:NextApiResponse<Data>) => {

  const response = await conn.query("SELECT NOW()");
  return res.json({message:"pong",time:response.rows[0].now});
};
