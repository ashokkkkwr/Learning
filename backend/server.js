require('dotenv').config()
const express = require('express')
const app= express()

app.get('/',(req,res)=>{
    res.send('hello wrold')
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port${process.env.PORT}`)
})