import {NextApiRequest,NextApiResponse} from "next";

export default (req:NextApiRequest,res:NextApiResponse)=>{

        const {method,query} = req;
        console.log(query)

        switch (method){
                case "GET":
                        return res.json("getting unique task")
                case "PUT":
                        return res.json("getting unique task")
                case "DELETE":
                        return res.json("getting unique task")
                default:
                        return res.status(400).json("methos not allowed")


        }
}