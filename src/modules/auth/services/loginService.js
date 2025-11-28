import UserModel from "../models/index.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginService = async(body)=>{
try {

    let {emailOrUserName , password} = body
    
    let loginUser;

    if(emailOrUserName.includes('@')){
        loginUser = await UserModel.findOne({
            email : emailOrUserName
        })
    }else{
        loginUser = await UserModel.findOne({
            userName : emailOrUserName
        })
    }

    if(!loginUser){
        throw new Error({
            message : "User is not exist",
            status : 404
        })
    }

    const matchPass = await bcrypt.compare(password, loginUser.password)

    if(!matchPass){
        throw new Error({
            message : "incorrect Password",
            status : 401
        })
    }

    loginUser = loginUser.toObject()

    delete loginUser.password


      const authToken =  jwt.sign({
           userName : loginUser.userName,
           fullName : loginUser.fullName,
           email : loginUser.email,
       },process.env.JWT_KEY)


       


       return {loginUser , authToken}

} catch (error) {
    throw new Error(error.message)

}


}