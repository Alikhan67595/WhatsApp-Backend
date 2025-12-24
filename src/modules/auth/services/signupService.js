import { createUser } from "../db/index.js"
import signupSchema from "../schema/signupSchema.js"
import mongoose from "mongoose"
import UserModel from "../models/index.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'




export const signupService = async(body)=>{
try {
    
    let {error , value} = signupSchema.validate(body)
    
    
    if(error){
        console.log(error)
        throw new Error(error.details[0].message)
    }

    const {fullName , userName , email , password} = value
    
    let findEmail = await UserModel.findOne({
        email : email
    })

    if(findEmail){
        let error = new Error("Email is already exist")
            error.status = 409
        throw error
    }


    let findUserName = await UserModel.findOne({
        userName : userName
    })

    if(findUserName){
        let error = new Error("Username is already exist")
            error.status = 409
        throw error
    }
    

    const saltRound = parseInt(process.env.SALT_ROUND)

    const hashPassword = await bcrypt.hash(password, saltRound)
    
    console.log(hashPassword)

    value.password = hashPassword
   
    const user = await createUser(value)

    const authToken =  jwt.sign({
        email : email,
        id :  user._id
    },process.env.JWT_KEY)


    return {user , authToken}

   

    

} catch (error) {
    console.log(error)
    throw error

}
}