import {Router} from 'express'
import { signupController } from './controllers/authSignupController.js'
import { loginController } from './controllers/authLoginController.js'
import { findUserController } from './controllers/findUserController.js'
import { fetchUserController } from './controllers/fetchUserController.js'
import { tokenVerification } from '../../middleware/tokenVerification.js'



let authRoutes = Router()


authRoutes.post('/signup', signupController)
authRoutes.post('/login', loginController)
authRoutes.post('/finduser', findUserController)
authRoutes.get('/user',tokenVerification, fetchUserController)





export default authRoutes

