import Joi from  'joi';
import FoodCategory from '../../Model/FoodCategory.js';
import FoodSubCategory from '../../Model/FoodSubCategory.js';



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


export const createFoodSubcategorie = async (req, res) => {

try {
    const schema = Joi.object({
        food_category_id: Joi.number().required(), 
        name: Joi.string().required()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
        status: false,
        message: error.details[0].message
        });
    }

    const { food_category_id, name } = value;

    // image with path
    const image =   req.file
                    ? `${req.file.destination}/${req.file.filename}`
                    : null;

    
    const category = await FoodCategory.findByPk(food_category_id);

    if (!category) {
        return res.status(404).json({
        status: false,
        message: "Category not found"
        });
    }

    
    const data = await FoodSubCategory.create({
        food_category_id,
        name,
        image
    });

    return res.status(201).json({
        status: true,
        message: "Subcategory created successfully",
        data
    });

} catch (error) {
    return res.status(500).json({
    status: false,
    message: "Something went wrong",
    error: error.message
    });
}
};


export const createFoodSubSubCategorie = async (req, res) => {
    try {
  
      // ✅ Validation
      const schema = Joi.object({
        food_sub_category_id: Joi.number().required(),
        name: Joi.string().required()
      });
  
      const { error, value } = schema.validate(req.body);
  
      if (error) {
        return res.status(400).json({
          status: false,
          message: error.details[0].message
        });
      }
  
      const { food_sub_category_id, name } = value;
  
      //  multer file
      const image = req.file ? req.file.filename : null;
  
      // Check parent exists (VERY IMPORTANT )
      const subCategory = await FoodSubCategory.findByPk(food_sub_category_id);
  
      if (!subCategory) {
        return res.status(404).json({
          status: false,
          message: "Sub Category not found"
        });
      }
  
      // Create sub-subcategory
      const data = await FoodSubSubCategory.create({
        food_sub_category_id,
        name,
        image
      });
  
     return res.status(201).json({
        status: true,
        message: "Sub-SubCategory created successfully",
        data
      });
  
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: error.message
      });
    }
};