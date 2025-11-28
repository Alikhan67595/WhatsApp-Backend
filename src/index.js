import {Router} from 'express'
import  authRoutes from './modules/auth/auth_routes.js'


let routes = Router()


routes.use('/auth', authRoutes)


routes.get('/',(req,res)=>{
    res.send('this is routes')
})



export default routes