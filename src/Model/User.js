import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  

const User = sequelize.define(

"User",{

id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    },

    first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },


    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },



    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    },

    password: {
    type: DataTypes.STRING,
    allowNull: false,
    }, 
},
{   
    tableName: "users",   // must match migration
    timestamps: true,    // createdAt & updatedAt

}



);


User.associate = (models) => {
    User.hasMany(models.DeviceInfo, {
      foreignKey: "user_id",
      as: "devices",
    });
}; 

User.associate = (models)=>{
    User.hasOne(models.SellerShop,{
        foreignKey: "user_id",
        as: "shop",
    })
}


export default User;
