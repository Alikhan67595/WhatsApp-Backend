import UserModel from "../models/index.js"

export const createUser = async(body)=>{

const user = await new UserModel(body).save()

let userObject = user.toObject()

delete userObject.password

return userObject
}



