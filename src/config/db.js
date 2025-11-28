import mongoose from 'mongoose'
import 'dotenv/config'
import chalk from 'chalk'


const url = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@whatsapp.mmlvgbj.mongodb.net/?appName=WhatsApp`


mongoose.connect(url)



export default mongoose

