import { DataTypes } from "sequelize";
import Sequelize from "./config/";  

const User = sequelize.define(

"User",{

id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    },

    name: {
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

export default User;
