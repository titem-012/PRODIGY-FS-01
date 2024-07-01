import jwt from "jsonwebtoken";

const protectRoute = (req,res,next) => {
    const token = req.cookies.jwt;
    if(!token){
        res.status(400).json("Login again")
    }
    const decodeTheTokken = jwt.verify(token,process.env.SECRET);

    if(decodeTheTokken){
        next();
    }
}
export default protectRoute;