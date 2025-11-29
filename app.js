import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from './src/config/db.js'
import routes from './src/index.js'



const app = express()
const port = 3000


app.use(cors({
  origin: ['https://web-whatsaapp.netlify.app', 'http://localhost:5173', 'http://localhost:5174','http://localhost:5175','http://localhost:5176','http://localhost:5177' ],  
  credentials: true
}));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)


mongoose.connection.on('open',()=>{
    console.log(chalk.black.bgBlue('MongoDB is connected'))
})

mongoose.connection.on("error",(error)=>{
    console.error("error", error)
})





app.listen(port, () => {
  console.log(chalk.green.bold(`Example app listening on port ${port}`))
})




