import {getContactService} from '../services/getContactService.js'


export const getContactController = async (req, res) => {
    try {

        let {id} = req.params

        let contactList = await getContactService(id);
        
        res.status(200).json({
            status : 200,
            contacts : contactList,
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