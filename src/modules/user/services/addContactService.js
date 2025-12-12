import UserModel from "../../auth/models/index.js"


export const addContactService = async (id, body) => {
try {
        let {contactId : userId , contactName, emailorUserName , profilePhoto} = body

        if(!userId || !contactName || !emailorUserName){
            let error = new Error("All fields are required")
            error.status = 400
            throw error
        }

        let user = await UserModel.findOne({userId : userId})

        if(user){
            let error = new Error("Contact already exists")
            error.status = 400
            throw error
        }





       let addContact = await UserModel.findByIdAndUpdate(id,
        { $push: { contacts: {contactName : contactName, userId : userId,  profilePhoto : profilePhoto } } }, 
        { new: true }
       )

      addContact = addContact.toObject()
     delete  addContact.password 
        

        console.log(addContact);

        return addContact
    
    
} catch (error) {
    throw error
}
}