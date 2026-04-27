import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";  

const DeviceInfo = sequelize.define(
  "DeviceInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    device: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    device_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    fcm_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "device_infos", // ✅ migration se match
    timestamps: true,          // createdAt, updatedAt auto handle
  }
);


DeviceInfo.associate = (models) => {
  DeviceInfo.belongsTo(models.User, {
    foreignKey: "user_id",
    as: "user",
  });
};

export default DeviceInfo;