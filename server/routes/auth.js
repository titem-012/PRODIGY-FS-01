import express from 'express';
import { signUp, login, logOut } from '../controller/authController.js';
const router = express.Router();
router.post("/signUp", signUp);
router.post("/login", login);
router.post("/logOut", logOut);
export default router;