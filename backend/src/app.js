import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({}))
app.use(express.json())//allowing json files.
app.use(express.urlencoded({extended:true}))//website ko url ko white space harulai kasari handle garne define garxa
app.use(express.static("public"))//images pdf  store garnlai public ma
app.use(cookieParser())











//routes import 
import userRouter from './routes/user.routes.js'
//routes declaration
app.use("/user",userRouter)


export{app}