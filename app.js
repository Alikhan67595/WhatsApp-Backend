import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from './src/config/db.js'
import routes from './src/index.js'
import http from 'http'
import { Server } from 'socket.io'




const app = express()
const port = 8000
const server = http.createServer(app)



// ye cors http server ki hai
export const io = new Server(server,{
  cors : {
     origin: ['https://web-whatsaapp.netlify.app', 'http://localhost:5173', 'http://localhost:5174','http://localhost:5175','http://localhost:5176','http://localhost:5177' ],  
  credentials: true
  }
})


//  ye cors express server ki hai
app.use(cors({
  origin: ['https://web-whatsaapp.netlify.app', 'http://localhost:5173', 'http://localhost:5174','http://localhost:5175','http://localhost:5176','http://localhost:5177' ],  
  credentials: true
}))



io.on("connection",(socket)=>{
    console.log("user Socket Id" ,socket.id)

    socket.on("join-room",(userId)=>{
      socket.join( userId)
      console.log(`User with ID ${userId} joined room successfully`)
    })


    socket.on("disconnect",()=>{
      console.log("user disconnected")

    })
})



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




server.listen(port,"0.0.0.0", () => {
  console.log(chalk.green.bold(`Example app listening on port ${port}`))
})




