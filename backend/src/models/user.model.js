import mongoose from "mongoose";
const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            
        }

}
)
export const User= mongoose.model("User",userSchema)