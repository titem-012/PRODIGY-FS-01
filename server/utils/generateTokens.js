import jwt from "jsonwebtoken";

const generateAndSetCookies = (userId) => {
    console.log(userId);
    return jwt.sign({userId},process.env.SECRET,{expiresIn:"15d"})
}

export default generateAndSetCookies;