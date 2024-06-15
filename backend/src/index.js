import 'dotenv/config'

import connectDB from './db/db.js';

import {app} from './app.js'
// connect to db


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to the port ${process.env.PORT}`)
        console.log("connected to the database")
    })
})
<<<<<<< HEAD
console.log(sodfh);
=======

>>>>>>> 9dd2cbdaf5bbb041ff734c7b22258dfd6dec4d6f
console.log(sdfdgsi);
console.log(djsfhgit )
