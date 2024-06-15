import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected')
    }catch(ERROR){
        console.log("mongodb connection error",ERROR);
    }
}
export default connectDB