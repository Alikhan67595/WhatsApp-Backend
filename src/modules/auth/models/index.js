import mongoose , { Schema } from "mongoose";


const contactSchema = new Schema({
    contactName: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    profilePhoto: {
        type: String,
    }
});

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
    },
    profilePhoto :{
        type: String,
        default: null
    },
    About :{
        type: String,
        default: "Hey there! I am using WhatsApp."
    },
    contacts : [contactSchema]
},{
    timestamps : true
})

const UserModel = mongoose.model("users" , authSchema)

export default UserModel