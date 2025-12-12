import { addContactService } from "../services/addContactService.js";

export const addContactController = async (req, res) => {
try {
    let {id} = req.params
    let result = await addContactService(id, req.body);
    console.log(req.body);
    
        res.status(200).json({
            status : 200,
            user : result,
            message : "Contact added successfully"
        })
    
} catch (error) {
    console.log(error)
    res.status(error.status || 500).json({
        status : error.status || 500,
        message : error.message || "Internal server error",   
    })
}

}   