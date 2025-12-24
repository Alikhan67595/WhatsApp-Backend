import "dotenv/config"
import jwt from "jsonwebtoken"
import MessageModel from "../models/index.js"

export const fetchMessagesService = async (token , receiverId) => {
    try {
        let {id} =  jwt.verify(token , process.env.JWT_KEY)


        let messages = await MessageModel.find({
            $or : [
                {senderId : id , receiverId : receiverId},
                {senderId : receiverId , receiverId : id}
            ]
        })



        return messages

    } catch (error) {
        throw error
    }
}