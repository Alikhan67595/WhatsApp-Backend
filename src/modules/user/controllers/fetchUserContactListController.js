import {fetchUserContactListService} from "../services/fetchUserContactListService.js"

export const fetchUserContactListController =  async (req,res) =>{
    try {

      let token = req.cookies.WhatsappUser

        let contactList  = await fetchUserContactListService(token)

        res.status(200).json({
            status : 200,
            contactslist: contactList,
            message : "Contacts fetched successfully"
        })
        
    } catch (error) {
         console.log(error)
        res.status(error.status || 500).json({
            status : error.status || 500,
            message : error.message || "Internal server error",

        })
    }
}