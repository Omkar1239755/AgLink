import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  


const ShopProduct = sequelize.define('ShopProduct', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  shop_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  sub_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  variety_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  }

}, {
  tableName: 'shop_products',
  timestamps: true
});


ShopProduct.associate = (models)=>{
  ShopProduct.belongsTo(models.SellerShop,{
      foreignKey: "shop_id",
      as: "shopData"
  })
}


export default ShopProduct;