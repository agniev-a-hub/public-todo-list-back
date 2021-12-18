import  jwt from 'jsonwebtoken';
import { RoleObjectType } from './../models/role.model';
import { Request, Response, NextFunction } from "express";

interface RolesType {
    
}

function roleMiddleware (roles:Array<string>) {
    return function (req:Request, res:Response, next:NextFunction){
        if (req.method === "OPTIONS"){
            next()
        }
        try{
            const token:string = req.headers.authorization.split(' ')[1];
            if (!token){
                res.status(403).json({message: 'No auth (admin needed)!'})
            }
            
            let secret = "fuybtdfktrcfylhcthuttdbxt,fibn,fpelfyysqrfre;tecnfkyjybxtcrjhjcrjhjcrjhjgjqlehf,jnfnmkektckbns'njgthtdtkhtcgtrnkjk";
            const {roles: userRoles} = jwt.verify(token, secret)
            // NOTE //
            // Error here but it still works
            // this is jwt.verify result and it should have type 'roles' after desctructurization:
            // {   
            //     id: '61bc82554146e886fbaffe43',
            //     roles: [ 'ADMIN' ],
            //     iat: 1639817344,
            //     exp: 1671374944 
            // }
            // Result of: console.log(jwt.verify(token, secret))
            let hasRole = false;
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            })
            if (!hasRole){
                res.status(403).json({message: 'No auth (admin needed)!'})
            }

            next()
        }
        catch(e){ 
            console.log(e)
            res.status(403).json({message: 'No auth!'})
        }
    }
}

export default roleMiddleware;