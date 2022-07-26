import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        required:true,
        type:String,
        trim:true,
        lowercase: true,
        unique: true
    },
    password:{
        required:true,
        trim:true,
        type:String
    },
    isAdmin:{
        required:true,
        type:Boolean,
        default:false
    },
},{
    timestamps: true
})

const User = mongoose.model('User',userSchema)

export default User