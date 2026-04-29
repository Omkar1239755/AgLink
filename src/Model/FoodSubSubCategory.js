export default (sequelize, DataTypes) => {
    const FoodSubSubCategory = sequelize.define(
      'FoodSubSubCategory',
      {
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
      },
      {
        tableName: 'food_sub_subcategories',
        timestamps: true
      }
    );
  
    //Relation
    FoodSubSubCategory.associate = (models) => {

        FoodSubSubCategory.belongsTo(models.FoodSubCategory, {
            foreignKey: 'food_sub_category_id',
            as: 'subcategory'
        });
      
    };
  
    return FoodSubSubCategory;
  };