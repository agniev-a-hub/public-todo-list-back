import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";


function authMiddleware(req, res:Response, next:NextFunction) {
    if (req.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            res.status(403).json({message: 'No auth!'})
        }
        let secret = "fuybtdfktrcfylhcthuttdbxt,fibn,fpelfyysqrfre;tecnfkyjybxtcrjhjcrjhjcrjhjgjqlehf,jnfnmkektckbns'njgthtdtkhtcgtrnkjk";
        const decodedData = jwt.verify(token, secret)
        req.user = decodedData
        next()
    }
    catch(e){ 
        console.log(e)
        res.status(403).json({message: 'No auth!'})
    }
};

export default authMiddleware;


