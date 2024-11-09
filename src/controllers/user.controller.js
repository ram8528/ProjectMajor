import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError, APIError} from "../utils/ApiError.js";

import { User } from "../models/user.model.js"

import { uploadOnCloudinary } from "../utils/cloudinary.js";

import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res) => {
    /* res.status(200).json({
        message: "Ramdeep is running from UserControllerJS"
    }) */
   
        // get user details from frontend via postman
        // validation 
        // check if user already exists : username,email
        // check for images and check for avatars
        // upload them on cloudinary, avatar (especially)
        // create user object because we will store data on nosql db - create entry in db
        // remove password and refresh token field from response
        // check for user creation 
        // return res

        const {fullName,email,username,password} = req.body
        console.log("email: ",email);

        // if(fullName === ""){
        //     throw new APIError(400,"Fullname is required")
        // }

        if(
            [fullName, email, username, password].some((field) =>
            field?.trim() === "")
        ){
            throw new APIError(400,"All fields are required")
        }

        const existedUser = User.findOne({
            $or: [{username}, {email}]
        })

        if(existedUser){
            throw new APIError(409,"User with email or username already exists")

        }

        const avatarLocalPath = req.files?.avatar[0]?.path;

        const coverImageLocalPath = req.files?.coverImage[0]?.path;

        if(!avatarLocalPath){
            throw new ApiError(400,"Avatar file is required")
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)
        const coverImage = await uploadOnCloudinary(coverImageLocalPath)

        if(!avatar) {
            throw new APIError(400, "Avatar file is required")
        }

        const user = await User.create({
            fullName,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()
        })

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if(!createdUser){
            throw new APIError(500,"Something went wrong while registering user")
        }

        return res.status(201).json(
            new APIResponse(200,createdUser,"Registered Successfully")
        )

} )


export {
    registerUser,
}