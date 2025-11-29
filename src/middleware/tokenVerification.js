import jwt from "jsonwebtoken"
import "dotenv/config"



export const tokenVerification = async (req, res, next) => {
    try {
       let token = req.cookies.WhatsappUser
        // console.log(token)
        if(!token){
            return res.status(401).json({ message: "No token, authorization denied" })
        }

        let decoded = jwt.verify(token , process.env.JWT_KEY)
            // console.log(decoded)
           decoded && next()


    } catch (error) {
         return res.status(401).json({ message: "Invalid Token" })
    }
}