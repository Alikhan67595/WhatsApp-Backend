import {Router} from 'express'
import { fetchUserController } from './controllers/fetchUserController.js'
import { updateUserController } from './controllers/updateUserController.js'
import { findUserController } from './controllers/findContactController.js'
import { addContactController } from './controllers/addContactController.js'
import { getContactController } from './controllers/getContactController.js'



let userRoutes = Router()


userRoutes.get('/fetchuser', fetchUserController)
userRoutes.put('/update/:id', updateUserController)
userRoutes.post('/findcontact', findUserController)
userRoutes.post('/addcontact/:id', addContactController)
userRoutes.get('/addcontact/:id', getContactController)





export default userRoutes