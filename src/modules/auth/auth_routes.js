import {Router} from 'express'
import { signupController } from './controllers/authSignupController.js'
import { loginController } from './controllers/authLoginController.js'


let authRoutes = Router()


authRoutes.post('/signup', signupController)
authRoutes.post('/login', loginController)
authRoutes.get('/check', (req,res)=>{
    res.send('check')
})



export default authRoutes

