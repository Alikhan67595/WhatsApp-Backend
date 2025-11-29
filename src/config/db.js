import mongoose from 'mongoose'
import 'dotenv/config'
import chalk from 'chalk'



mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@whatsapp.mmlvgbj.mongodb.net/${process.env.DB_USER}?appName=WhatsApp`)



export default mongoose

