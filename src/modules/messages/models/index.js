import mongoose, { Schema } from "mongoose";



const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: null
    },
    video: {
        type: String,
        default: null
    },
    isRead: {
        type: Boolean,
        default: false
    },
    deliveredTime: {
        type: Date,
        default: Date.now
    },
    readTime: {
        type: Date,
        default: null
    },
    deleteForMe: {
        type: Schema.Types.ObjectId,
        ref: "users",
        default: null
    },
    edited: {
        type: Boolean,
        default: false
    }

},
{  
      timestamps: true
})

const MessageModel = mongoose.model("messages", messageSchema)

export default MessageModel