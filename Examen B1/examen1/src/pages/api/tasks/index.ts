import  { NextApiRequest, NextApiResponse } from 'next'

import {conn} from "../../../utils/database";

export default async (req:NextApiRequest,res:NextApiResponse) => {
const {method,body}=req;
/*if(method ==="GET"){

    res.status(200).json('getting tasks')
} else if(method ==="POST") {
    res.status(200).json('creating tasks')
}else{
        res.json("invalid method")
    }
 */
    switch (method){
        case 'GET':
            return res.status(200).json('getting tasks')


        case 'POST':
            const {title,description}=body;
            await conn.query()
            return res.status(200).json('creating tasks')


        default:
            return res.status(400).json("invalid method")



    }

}