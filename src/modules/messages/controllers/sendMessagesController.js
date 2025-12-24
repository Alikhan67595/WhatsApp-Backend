import { sendMessagesService } from '../services/sendMessagesService.js'

export const sendMessagesController = async (req, res) => {
    try {
        
        let token = req.cookies.WhatsappUser
        let result = await sendMessagesService(req.body, token)


        res.status(200).json({
            status : 200, 
            addMessage : result,
            message : "message is successfully send"
        })



    } catch (error) {
        console.log(error)

        res.status(error.status || 500).json({
            message: error.message || "Internal Server Error",
            status: error.status || 500
        })

    }
}