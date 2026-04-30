import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  

const FoodSubSubCategory = sequelize.define('FoodSubSubCategory', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    food_sub_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'food-sub-subcategories',
    timestamps: true
});

// 🔗 relation (same as tumne likha tha)
FoodSubSubCategory.belongsTo(sequelize.models.FoodSubCategory, {
    foreignKey: 'food_sub_category_id',
    as: 'subcategory'
});

export default FoodSubSubCategory;