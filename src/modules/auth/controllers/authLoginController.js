import { loginService } from "../services/loginService.js"


export const loginController = async (req, res) => {
    try {
        const { loginUser, authToken } = await loginService(req.body)


        res.cookie("WhatsappUser", authToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
            domain: "whats-app-backend-roan.vercel.app",
        })

        return res.status(200).json({
            status: 200,
            user: loginUser,
            token: authToken,
            message: "User is successfully login"
        })

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || "Internal server error"
        })
    }
}