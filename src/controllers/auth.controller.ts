import { Request, Response } from "express";
import { RoleModel, RoleObjectType } from './../models/role.model';
import { UserModel } from "../models/user.model";
import { validationResult } from "express-validator";
import config from 'config';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

////TOKEN GENERATION!!!///
const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles,
    }
    let secret = "fuybtdfktrcfylhcthuttdbxt,fibn,fpelfyysqrfre;tecnfkyjybxtcrjhjcrjhjcrjhjgjqlehf,jnfnmkektckbns'njgthtdtkhtcgtrnkjk";
    let tokenExpTime = '24h';
    return jwt.sign(payload, secret, {expiresIn: tokenExpTime})
}
///####################///


class AuthController {
    async registration(req:Request, res:Response){
        try{

            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Validation error!' + errors})
            }

            const {username, password} = req.body;
            const candidate = await UserModel.findOne({username});
            if (candidate){
                return res.status(400).json({message: 'auth.controller ->>> registration function Error, such user already exists'});
            };
            const hashedPassword = bcrypt.hashSync(password, 7);
            const userRole = await RoleModel.findOne({value: 'USER'});
            const user = new UserModel({username, password: hashedPassword, roles: [userRole.value]});
            await user.save();

            return res.status(200).json({message:'User has been registered!'})
        }
        catch(e){
            console.log(e) 
            res.status(400).json({message: 'auth.controller ->>> registration function Error'})
        }
    }
    async login(req:Request, res:Response){
        try{
            const {username, password} = req.body
            const user = await UserModel.findOne({username})
            if (!user){
                return res.status(400).json(`User ${username} has not been found!`)
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json(`Password is not valid!`)
            }

            ////TOKEN GENERATION!!!///
            const token = generateAccessToken(user._id, user.roles);
            ///####################///
            return res.json({token})
        }
        catch(e){
            console.log(e)
            res.status(400).json({message: 'auth.controller ->>> login function Error'})
        }
    }
    async users(req:Request, res:Response){
        try{
            // This section has been user to create userRole and adminRole, in order to not create separate endpoint for it
            // const userRole = new RoleModel()
            // const adminRole = new RoleModel({value: 'ADMIN'})
            // await userRole.save()
            // await adminRole.save()
            // res.json('userRole and adminRole created!')
            const users = await UserModel.find()
            return res.json(users)
        }
        catch(e){
            console.log(e)
            res.status(400).json({message: 'auth.controller ->>> users function Error'})
        }
    }
}

export default new AuthController()
