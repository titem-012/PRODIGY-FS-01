import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        minLength:6
    },
    Dob:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true,
        enum:["male","female"]
    }
},{timestamps: true})
const User = mongoose.model("User",userSchema);

export default User;