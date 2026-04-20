import Joi from  'joi';
import bcrypt from "bcrypt"; 


export const RegisterUser = async (req,res)=>{

try{
    
const schema = Joi.object({
        first_name : Joi.string().required(),
        last_name:  Joi.string().required(),
        email    :  Joi.string().required(),
        password :  Joi.string().min(6).required(),
        
 });    
  
const{error,value} = schema.validate(req.body);

if (error) {
    return res.status(400).json({
      status: false,
      message: error.details[0].message,
    });
}

const {first_name,last_name,email,password} = value;

const existingemail = await User.findOne({where:{email}});

if(existingemail){
    return res.status(400).json({
        status: false,
        message: "Email already registered",
    })
}

const hashpassword = await bcrypt.hash(password,10)

const User = await User.create({
    first_name,
    last_name,
    email,
    password:hashpassword
})

return res.status(201).json({
status:true,
message:"User Register Succesfully",
data:User
})

}catch(err){
    return res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: err.message
    });
};




};


export const Login = async(req,res)=>{




    
}