import mongoose from "mongoose";

const connectionToDatabase = async() => {
    try {
        await mongoose.connect("mongodb+srv://webdevshubhanshu:MongoDB05052005@cluster0.ol5xjsk.mongodb.net/UserAuth?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connection succesfull");
    } catch (error) {
        console.log("error in code");
        console.log(error);
    }
}
export default connectionToDatabase;