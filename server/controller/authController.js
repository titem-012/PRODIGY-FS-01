import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import generateAndSetCookies from "../utils/generateTokens.js";

export const signUp = async (req, res) => {
    try {
        const { Fullname, Username, Password, Dob, Gender } = req.body;
        let user = await User.findOne({ Username: Username });
        if (user) {
            console.log("sameUser")
            return res.status(400).json({ message: "Username already exists." });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(Password, salt);
        let newUser = new User({ Fullname, Username, Password: hashPassword, Dob, Gender });
        if(newUser){
            await newUser.save();
            let user = await User.findOne({ Username: Username });
            const token = generateAndSetCookies(user._id);
            // console.log(token);
            res.cookie("jwt", token);
            
            res.status(200).json({
                    _id: user._id,
                    fullName: user.Fullname,
                    userName: user.Username,
                    gender: user.Gender,
                    DateOfBirth: user.Dob
                })
        } else {
            res.status(500).json({ error: 'Invalid userData' });
        }
    } catch (error) {
        console.log("Error in Signup", error);
        res.status(500).json({ error: error.message });
    }
}
export const login = async (req, res) => {
    try {
        const { Username, Password } = req.body;
        let user = await User.findOne({ Username: Username });
        if (!user) {
            res.status(500).json("No User Exist");
        }
        else {
            const isMatch = await bcrypt.compare(Password, user.Password);
            // console.log(user.Password)
            if (isMatch) {
                const token = generateAndSetCookies(user._id);
                res.cookie("jwt", token);
                res.status(200).json({
                    _id: user._id,
                    fullName: user.Fullname,
                    userName: user.Username,
                    gender: user.Gender,
                    DateOfBirth: user.Dob
                })
            }
            else {
                res.status(400).json("Password is incorrect");
            }
        }
    } catch (error) {
        console.log("Error in Login", error);
        res.status(500).json({ error: error.message });
    }
}

export const logOut = (req,res) => {
    try {
        res.cookie("jwt","",{ maxAge : 0 });
        res.status(200).json({
            message:"Logout Successfully"
        })
    } catch (error) {
        console.log(error.message,"error in logout");
        res.status(500).json({error:"internal Server Error"});
    }
}