import UserModel from "../../auth/models/index.js"


export const updateUserService = async (id, body)=>{
    try {
        
       let findUser = await UserModel.findById(id)

        if(!findUser){
            let error = new Error("User not found")
            error.status = 404
            throw error
        }

        if(!body){
            let error = new Error("No data provided to update")
            error.status = 400
            throw error 
        }

        let updateUser = await UserModel.findByIdAndUpdate(id, body, {new: true}) 

        updateUser = updateUser.toObject()
        delete updateUser.password

        return updateUser

    } catch (error) {
        console.log(error)
        throw error

    }

}