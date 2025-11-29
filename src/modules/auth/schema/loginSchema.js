import joi from 'joi'

const loginSchema = joi.object({
    emailOrUserName : joi.string().required().min(3),
    password : joi.string().required().min(6)
})


export default loginSchema;