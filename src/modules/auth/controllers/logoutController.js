
export const logoutController = async(req, res) => {
    try {
    console.log("Logout controller called", req.cookies)
        res.clearCookie("WhatsappUser",{
            httpOnly: true,
            secure: true,
            sameSite: "none",   
            path: "/",
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Logout failed" })
    }
}