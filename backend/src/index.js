import 'dotenv/config'

import connectDB from './db/db.js';

import {app} from './app.js'
import { Console } from 'console';
// connect to db


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to the port ${process.env.PORT}`)
    })
})
console.log(dfshf);
console.log("djosfhs")
console.log(sodfh);
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
