import {signupService} from '../services/signupService.js'

export const signupController = async(req,res)=>{
try {
    const {user, authToken} = await signupService(req.body)
    console.log(user)
    res.status(201).json({
        status : 201,
        data : user ,
        token : authToken,
        message : "User is successfully created"
    })
    
} catch (error) {
    console.log(error)
    res.status(error.status ||500).json({
        status : error.status || 500,
        message: error.message || "Internal server error"})
}
}