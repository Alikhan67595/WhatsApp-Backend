import joi from 'joi'

const signupSchema = joi.object({
    fullName : joi.string().required().min(3),
    userName : joi.string().required().min(3),
    email : joi.string().required().email(),
    password : joi.string().required().min(6)
})


export default signupSchema;