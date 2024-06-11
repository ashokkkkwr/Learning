import 'dotenv/config'

import connectDB from './db/db.js';

import {app} from './app.js'
// connect to db


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to the port ${process.env.PORT}`)
    })
})
console.log("sjdf")