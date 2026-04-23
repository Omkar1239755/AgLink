import express from "express"
import dotenv from "dotenv"
import swaggerUi from "swagger-ui-express";
import fs from "fs";

dotenv.config();
// app initialisation
const app = express();

app.use(express.json());

// swagger ka configration 
const swagger = JSON.parse(
    fs.readFileSync(new URL("./swagger.json", import.meta.url))
  );
  
  app.use(
    "/api-docs",
    swaggerUi.serveFiles(swagger, {}),
    swaggerUi.setup(swagger)
  );
  

//user routes
import router from './src/api/user/index.js'
app.use(router);


app.listen(3000,()=>{

    console.log("SERVER IS LISTENING TO PORT 3000")

})  
