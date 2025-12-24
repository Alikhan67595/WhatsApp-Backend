import {Router} from 'express';
import { fetchMessagesController } from './controllers/fetchMessagesController.js';
import { sendMessagesController } from './controllers/sendMessagesController.js';




const messagesRoutes = Router()

messagesRoutes.get('/getmessages/:receiverId', fetchMessagesController)
messagesRoutes.post('/sendmessages', sendMessagesController)




export default messagesRoutes