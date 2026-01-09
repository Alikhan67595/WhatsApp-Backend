
export const logoutController = async(req, res) => {
    try {
    console.log("Logout controller called", req.cookies)
    res.clearCookie("WhatsappUser", {
            httpOnly: true,
            secure: true, 
            sameSite: "none",
            path: "/",
        domain: "whatsapp-backend-nw0s.onrender.com",
        });

      return  res.status(200).json({
        status: 200,
        user: null,
        message: "Logout successful",
        })  

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Logout failed" })
    }
}