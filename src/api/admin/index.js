import express from 'express'
import {createCategory} from './controller.js'
import createmulter from '../../utils/multer.js';

const adminrouter = express.Router();



const uploadCategory  = createmulter("category");

// Add category
adminrouter.post("/food-categories", uploadCategory.single("image"),createCategory);





export default adminrouter;