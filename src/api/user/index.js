import express from 'express';
import { RegisterUser,Login } from './controller.js';
const router = express.Router();




router.post('/register-user',RegisterUser)
router.post('/login',Login)

export default router;

