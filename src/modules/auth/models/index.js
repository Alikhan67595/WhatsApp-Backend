import mongoose , { Schema } from "mongoose";


const authSchema = new Schema({
    fullName :{
        type: String,
        required: true,
        minlength : 3
    },
    userName :{
        type: String,
        required: true,
        unique: true,
        minlength : 3
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true
    }
},{
    timestamps : true
})

const UserModel = mongoose.model("users" , authSchema)

export default UserModel