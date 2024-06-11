import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import{uploadOnCloudinary}from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"



const registerUser = asyncHandler(async(req,res)=>{
 
    
    // upload them to cloudinary, avatar
    // create user object- create entry in db
    // remove password and refresh token field from response
    // check for user creation   
    //return res
    


   //get user details from frontend
    //destructuing
    const {fullName,email,username,password}=req.body
    console.log("email:",email);
        //validate -not empty

    if(fullName=== ""){
        throw new ApiError(400,"fullname is required")

    }
    if(email=== ""){
        throw new ApiError(400,"email is required")

    }
    if(username=== ""){
        throw new ApiError(400,"username is required")

    }
    if(password=== ""){
        throw new ApiError(400,"password is required")

    }
    User.findOne({
        $or:[{ username } ,{ email} ]
    })
    if(existedUser){  
        throw new ApiError(409,"User with email or username already exists")
    } 
    //check for images, check for avatar

    //multer
    const avatarLocalPath= req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }
    //
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage= await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Avatar file is required")
    }
   const user =await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registring the user")
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser,"User registered Successfully")
    )
})

export {registerUser,}

 

