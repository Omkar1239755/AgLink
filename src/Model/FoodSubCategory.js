import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  


const FoodSubCategory = sequelize.define("FoodSubCategory", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    food_category_id: {
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
    },

}, 

{
  tableName: "food-subcategories",
  timestamps: true
});


FoodSubCategory.associate = (models) => {

    FoodSubCategory.belongsTo(models.FoodCategory, {
      foreignKey: 'food_category_id',
      as: 'category'
    });
    
};


FoodSubCategory.associate = (models)=> {

  FoodSubCategory.hasMany(models.FoodSubSubCategory,{
    foreignKey: 'food_sub_category_id',
    as: 'sub_subcategories'
  })

}



export default FoodSubCategory;