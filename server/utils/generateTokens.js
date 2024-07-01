import jwt from "jsonwebtoken";

const generateAndSetCookies = (userId) => {
    console.log(userId);
    return jwt.sign({userId},"XembLm3C08F6NZIWXOV/c/6HHuSq17AvhHDd19as16g",{expiresIn:"15d"})
}

export default generateAndSetCookies;