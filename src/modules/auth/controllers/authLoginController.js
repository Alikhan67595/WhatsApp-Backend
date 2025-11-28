import { loginService } from "../services/loginService.js"


export const loginController = async(req,res)=>{
    try {
       const {loginUser,authToken} = await loginService(req.body)

       res.status(200).json({
        status : 200,
        data : loginUser,
        token : authToken,
        message : "User is successfully login"
       })
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).send({
            status : error.status || 500,
            message : error.message || "Internal server error"
        })
    }
}