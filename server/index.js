import express from 'express';
import dotenv from "dotenv";
import connectionToDatabase from './database/databaseConnection.js';
import authentication from './routes/auth.js';
import getUsers from './routes/users.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Your front-end local domain
    credentials: true // Allow credentials (cookies) to be sent
}));

dotenv.config();



const port = process.env.PORT || 7000;

app.get("/",(req,res)=>{
    res.json("hello")
})



app.use("/api/auth",authentication)
app.use("/api/users",getUsers)
app.listen(port,()=>{
    connectionToDatabase();
    console.log('server is running on port',port);
})