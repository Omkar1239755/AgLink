import express from "express"
import dotenv from "dotenv"



dotenv.config();
const app = express();





//user routes
import router from './src/api/user/index.js'
app.use(router);


app.listen(3000,()=>{

console.log("SERVER IS LISTENING TO PORT 3000")

})  
