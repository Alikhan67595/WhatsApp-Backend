import {Router} from 'express'
import { fetchUserController } from './controllers/fetchUserController.js'
import { updateUserController } from './controllers/updateUserController.js'
import { findUserController } from './controllers/findContactController.js'
import { addContactController } from './controllers/addContactController.js'




let userRoutes = Router()


userRoutes.post('/findcontact', findUserController)
userRoutes.post('/addcontact/:id', addContactController)
userRoutes.put('/update/:id', updateUserController)
userRoutes.get('/fetchuser', fetchUserController)





export default userRoutes