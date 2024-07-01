import User from "../models/userModel.js";

export const getAllUserController = async(req,res) => {
    try {
        let allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in fetching the user",error)
        res.status(500).json({error:"Internal server error"});
    }
};