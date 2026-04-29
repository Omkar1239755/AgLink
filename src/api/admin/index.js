import express from 'express'
import {createCategory,createFoodSubcategorie,createFoodSubSubCategorie} from './controller.js'
import createmulter from '../../utils/multer.js';

const adminrouter = express.Router();



const uploadCategory  = createmulter("category");
const uploadSubCategory  = createmulter("subcategory");
const uploadSubSubCategory = createmulter("subsubcategory")

// Add category
adminrouter.post("/food-categories", uploadCategory.single("image"),createCategory);

adminrouter.post("/food-subcategories",uploadSubCategory.single("image"),createFoodSubcategorie);

adminrouter.post("/food-sub-subcategories",uploadSubSubCategory .single("image",),createFoodSubSubCategorie);




export default adminrouter;