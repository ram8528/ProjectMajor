import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
     
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    avatar: {
        type: String,   // cloudinary url
        required: true
    },

    coverImage: {
        type: String,   // cloudinary url
    },

    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

    password: {
        type: String,
        required: [true,"Password is Required"]
    },

    refreshToken: {
        type: String,
    }

    },
    {
        timestamps: true
    }
)

// Define a 'pre-save' hook for the 'userSchema' to hash the password before saving to the database
userSchema.pre("save", async function (next) {
    
    // Check if the 'password' field is modified
    if (!this.isModified("password"))  return next();    // If the password is not modified, proceed to the next middleware

    // If the password is modified, hash the new password
    this.password = await bcrypt.hash(this.password, 10);  // Hash the password using bcrypt with a salt rounds of 10

    // Call the 'next' function to proceed with saving the document
    next();  // Continue the 'save' operation after hashing the password
});

userSchema.methods.isPasswordCorrect = async function
(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function() {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function() {
    jwt.sign(
        {
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User", userSchema)