import {Router} from 'express'
import  authRoutes from './modules/auth/auth_routes.js'
import userRoutes from './modules/user/user_routes.js'
import messagesRoutes from './modules/messages/messages_routes.js'
import { tokenVerification } from './middleware/tokenVerification.js'


let routes = Router()


routes.use('/auth', authRoutes)
routes.use('/user',tokenVerification, userRoutes)
routes.use('/messages',tokenVerification, messagesRoutes)





export default routes