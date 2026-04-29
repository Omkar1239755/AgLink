import express from 'express';
import { RegisterUser,Login,ForgetPassword,VerifyOtp, 
    resetPassword,addSeller,getCategorie,subCategorie,getType,createProduct } from './controller.js';
import createmulter from '../../utils/multer.js';
import authMiddleware from '../../utils/authmiddleware.js';

const router = express.Router();



const uploadShopImage  = createmulter("shopimage");


router.post('/register-user',RegisterUser)
router.post('/login',Login)
router.post('/forget-password',ForgetPassword)
router.post('/verify-password',VerifyOtp);
router.post('/reset-password',resetPassword)

router.post('/add-seller', authMiddleware ,uploadShopImage.single("image"),addSeller)

// SELLER HOME SCREN
// router.get('/seller-home',authMiddleware,sellerHome);



// seller add products
router.get('/categories',getCategorie);
router.get('/subcategorie',subCategorie);
router.get('/getType',getType);
router.post('/create-product',authMiddleware,createProduct);




export default router;

