import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  
import User from "./User.js";


const SellerShop = sequelize.define("SellerShop", {

id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

user_id:{
  type:DataTypes.INTEGER,
  allowNull:false
},
shop_image: DataTypes.STRING,

shop_name:{
type: DataTypes.STRING,
allowNull:true
},

shopkeaper_name: {
type:DataTypes.STRING,
allowNull:true
},

email: {
type:  DataTypes.STRING,
allowNull:false
},

phone_number:{
type: DataTypes.STRING,
allowNull:true
},

shop_address:{
type:DataTypes.STRING,
allowNull:true
}

},{
  tableName: "seller_shops",
  timestamps: true
});


SellerShop.associate = (models) => {
    SellerShop.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user"
    });
};


SellerShop.associate = (models)=>{
  SellerShop.hasMany(models.ShopProduct,{
      foreignKey: "shop_id",
      as: "shopData"

  })
}






export default SellerShop;