import UserModel from "../../auth/models/index.js"


export const findUserController = async(req,res)=>{
    try {
        const {emailOrUserName} = req.body
        
        if(!emailOrUserName){
            return res.status(400).json({
                status : 400,
                message : "Please provide email or username"
            })
        }


console.log(emailOrUserName)

let findUser = null

if(emailOrUserName.includes('@')){
    findUser = await UserModel.findOne({
        email : emailOrUserName
    })

}else{
    findUser = await UserModel.findOne({
        userName : emailOrUserName
    })

}

console.log("findUser", findUser)

if(findUser){
    res.send({user : true, id: findUser._id, profilePhoto: findUser.profilePhoto})
}
else{
    res.send({user : false})
        }


    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({
            status : error.status || 500,
            message : error.message || "Internal server error",

        })
    }
} 