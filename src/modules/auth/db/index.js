import UserModel from "../models/index.js"

export const createUser = async(body)=>{

const user = await UserModel.create(body)

let userObject = user.toObject()

delete userObject.password

return userObject
}



