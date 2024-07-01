import jwt from "jsonwebtoken";

const protectRoute = (req,res,next) => {
    const token = req.cookies.jwt;
    if(!token){
        res.status(400).json("Login again")
    }
    const decodeTheTokken = jwt.verify(token,"XembLm3C08F6NZIWXOV/c/6HHuSq17AvhHDd19as16g");

    if(decodeTheTokken){
        next();
    }
}
export default protectRoute;