import { fetchMessagesService } from '../services/fetchMessagesService.js';

export const fetchMessagesController = async (req, res) => {
    try {
        let {receiverId} = req.params
        let token = req.cookies.WhatsappUser
        let result  = await fetchMessagesService(token, receiverId)
        // console.log(result)
   
        res.status(200).json({
            status : 200,
            messages : result
        })
        
  } catch (error) {
        console.error("fetchMessagesController mai error hai:", error);

        res.status(error.status || 500).json({
             message: error.message || "Internal Server Error",
             status : error.status || 500 
            });
    }
}