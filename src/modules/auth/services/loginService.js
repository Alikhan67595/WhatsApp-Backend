import UserModel from "../models/index.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import loginSchema from "../schema/loginSchema.js"

export const loginService = async(body)=>{
try {

    let {error,value} = loginSchema.validate(body)

    if(error){
        console.log(error)
        throw new Error(error.details[0].message)
    }

    let {emailOrUserName , password} = value
    console.log("body",body)
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
        
          let error = new Error("User is not exist" )
           error.status = 404
           console.log(error.status)
           throw error
    
    }

    const matchPass = await bcrypt.compare(password, loginUser.password)

    if(!matchPass){
        
     let error  = new Error("incorrect Password")
        error.status = 401
        console.log(error.status)
      throw error
        
    }

    loginUser = loginUser.toObject()

    delete loginUser.password


      const authToken =  jwt.sign({
           email : loginUser.email,
           id :  loginUser._id
       },process.env.JWT_KEY)


       


       return {loginUser , authToken}

} catch (error) {
    throw error

}


}