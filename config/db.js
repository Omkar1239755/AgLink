import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

                    // 1️⃣ Load ENV
                    const env = process.env.NODE_ENV || "development";

                    // 2️⃣ Read config.json
                    const configPath = path.resolve("./config/config.json");
                    const rawConfig = fs.readFileSync(configPath, "utf-8");
                    const config = JSON.parse(rawConfig);

                    // 3️⃣ Get correct env config
                    const dbConfig = config[env];
                    
                    // 4️⃣ Sequelize instance
                    const sequelize = new Sequelize(
                      dbConfig.database,
                      dbConfig.username,
                      dbConfig.password,
                      {
                        host: dbConfig.host,
                        dialect: dbConfig.dialect,
                        logging: false,
                      }
  
);

export default sequelize;
