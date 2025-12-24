import  UserModel  from '../../auth/models/index.js'


export const getContactService = async (id) =>{
    try {

        if(!id){
            let error = new Error("User id is required")
            error.status = 400
            throw error 
        }

        let userContact = await UserModel.findById(id)

        if(!userContact){
            let error = new Error("User not found")
            error.status = 404
            throw error 
        }

        return userContact.contacts
        
    } catch (error) {
        
    }
}