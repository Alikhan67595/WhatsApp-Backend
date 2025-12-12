import jwt from "jsonwebtoken"
import "dotenv/config"
import UserModel from "../../auth/models/index.js"


export const fetchUser = async (token) => {
    try {

        let { email, userName } = jwt.verify(token, process.env.JWT_KEY)

        let findUser = null

        if (!email) {
            findUser = await UserModel.findOne({
               userName : userName
            })
        }else{
            findUser = await UserModel.findOne({
               email: email
            })
        }

        let user = findUser.toObject()
        
        delete user.password
        
        return {user}


    } catch (error) {
        console.log(error)
        return error
    }

}