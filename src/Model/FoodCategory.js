import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  


const FoodCategory = sequelize.define("FoodCategory", {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  food_category: {
    type: DataTypes.STRING,
    allowNull: true
  },

  image: {
    type: DataTypes.STRING,
    allowNull: true
  },

  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
    comment: "1 = active, 0 = inactive"
  }

}, {
  tableName: "food_categories",
  timestamps: true
});

export default FoodCategory;