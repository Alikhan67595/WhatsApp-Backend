import UserModel from "../models/index.js"


export const findUserController = async(req,res)=>{
    try {
        const {findUsername} = req.body
        let findUser = await UserModel.findOne({userName : findUsername})
console.log("req.body", req.body)
console.log("findUser", findUser)
        if(!findUser){
            res.send({userName : true})
        }
        else{
            res.send({userName : false})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
} 