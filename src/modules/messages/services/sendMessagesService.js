import MessageModel from "../models/index.js"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { io } from "../../../../app.js"




export const sendMessagesService = async (body , token) =>{
    try {

         let {id : senderId} = jwt.verify(token , process.env.JWT_KEY)

         if(!body){
            let error = new Error("message is required")
            error.status = 400
        throw error
         }

         let {message, receiverId} = body

        let newMessage = await MessageModel.create({message , receiverId , senderId})

            console.log("Sending message to room:", receiverId)


            io.to(receiverId).emit("receive-message",newMessage)
          
    


         return newMessage
        


    } catch (error) {
        console.log(error)
        throw error
    }
}