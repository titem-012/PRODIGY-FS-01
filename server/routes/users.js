import express from 'express';
import { getAllUserController } from '../controller/getAllUsersController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();
router.get("/",protectRoute,getAllUserController);
export default router;