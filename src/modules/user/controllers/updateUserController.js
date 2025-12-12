import { updateUserService } from "../services/updateUserService.js"


export const updateUserController = async (req, res) => {
    try {
        let {id} = req.params
        let body = req.body
        let updatedUser = await updateUserService(id, body)
        console.log(body)

        return res.status(200).json({
            status: "200",
            user: updatedUser,
            message: "User updated successfully",
        })
        
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || "Internal server error"
        })
    }

}