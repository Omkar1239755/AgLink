import Joi from  'joi';
import FoodCategory from '../../Model/FoodCategory.js';



export const createCategory = async (req, res) => {
    try {
        const schema = Joi.object({
            food_category: Joi.string().required()
        });
    
        const { error, value } = schema.validate(req.body);
    
        if (error) {
            return res.status(400).json({
            status: false,
            message: error.details[0].message
            });
        }
    
        const { food_category } = value;
    
        // multer file
        const image = req.file ? req.file.filename : null;
    
        if (!image) {
            return res.status(400).json({
            status: false,
            message: "Image is required"
            });
        }
    
        const data = await FoodCategory.create({
            food_category,
            image   
        });
    
        return res.status(201).json({
            status: true,
            message: "FoodCategory inserted successfully",
            data: data
        });
  
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: err.message
      });
    }
  };