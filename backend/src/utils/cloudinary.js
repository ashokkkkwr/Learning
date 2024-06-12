import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'    
cloudinary.config({ 
  cloud_name: 'dymmnixca', 
  api_key: '364912259489596', 
  api_secret: 'XggzcIqlQ9hkYuZsYL_dg8Jyor0' 
});
const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath)return null
        //upload the file on cloudinary
        const response =await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file been uploaded on cloundinary",response.url)
        return response
    }catch(error){
        //remove the locally saved temporary file if upload operation get failed
        fs.unlinkSync(localFilePath)
        return null;
    }
}
 
