import { fetchUser } from "../services/fetchUser.js"




export const fetchUserController = async (req, res) => {
    try {
        let token = req.cookies.WhatsappUser
        console.log(token)
        let { user } = await fetchUser(token)
console.log(user)
        res.status(200).json({
            status: 200,
            user: user,
            message: "User fetched successfully"
        })

    } catch (error) {
        res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Internal server problem"
        })
    }
}