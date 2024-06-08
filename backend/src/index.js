import mongoose from 'mongoose';
import express from 'express'
const app= express()  
import 'dotenv/config'
import connectDB from './db/db.js';
// connect to db


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to the port ${process.env.PORT}`)
    })
})
