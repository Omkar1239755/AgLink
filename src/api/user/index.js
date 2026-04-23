import express from 'express';
import { RegisterUser,Login,ForgetPassword,VerifyOtp, resetPassword } from './controller.js';
const router = express.Router();



router.post('/register-user',RegisterUser)
router.post('/login',Login)
router.post('/forget-password',ForgetPassword)
router.post('/verify-password',VerifyOtp);
router.post('/reset-password',resetPassword)
export default router;

