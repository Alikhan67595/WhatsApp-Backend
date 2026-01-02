import jwt from "jsonwebtoken"
import "dotenv/config"
import UserModel from "../../auth/models/index.js"
import MessageModel from "../../messages/models/index.js"




export const fetchUserContactListService = async (token)=>{
    try {
            let user = jwt.verify(token , process.env.JWT_KEY)


            let findUser = await UserModel.findById(user?.id)

            let findMessage = await MessageModel.find(
                  {  receiverId : user?.id}
            )

            findUser = findUser?.contacts
        
         

            return findMessage

    } catch (error) {
        console.log(error)
        throw error
    }
}