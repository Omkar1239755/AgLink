import Joi from  'joi';
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";
import User from '../../Model/User.js';
import { sendEmail } from '../../utils/email.js';

// register
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

const user = await User.create({
                first_name,
                last_name,
                email,
                password:hashpassword
            })


            
return res.status(201).json({
status:true,
message:"User Register Succesfully",
data:user
})

}catch(err){
    return res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: err.message
    });
};




};
// login
export const Login = async (req, res) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }

        const { email, password } = value;

        // 🔹 User find karo
        const user = await User.findOne({
            where: {
                email: email,
            }
        });

        //  important check
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // 🔹 Password check
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        // JWT Token generate karaya
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return res.status(200).json({
            message: "Login successful",
            token: token,
            user: user
        });

    } catch (err) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: err.message
        });
    }
};
// forgetpassword
export const ForgetPassword = async(req,res)=>{

 try {
    
        const schema = Joi.object({
            email: Joi.string().email().required()
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }

        const {email} = value;

        const user = await User.findOne({
                        where:{
                        email:email
                        }
                    })

        if (!user) {
            return res.status(400).json({
                message: "This email is invalid"
            });
        }

        const otp =  Math.floor(1000 + Math.random()*9000);
        
        //expiry (10 min)
        const expiry = new Date(Date.now() + 10 * 60 * 1000);
        
        user.otp = otp;
        user.otp_expire_at = expiry;
        user.save();

        //send mail 
        await sendEmail(
            email,
            "Password Reset OTP",
            `Your OTP is ${otp}`
        );

        return res.json({ message: "OTP sent to email" });
         }catch (error) {
        return res.status(500).json({ message: err.message });   
 }


};
//verify otp
export const VerifyOtp = async(req,res)=>{
try {

        const schema = Joi.object({
            email:Joi.string().required(),
            otp:Joi.string().required()
        });

        const {error,value}  = schema.validate(req.body);

        if(error){
            return res.status(400).json({
                status:false,
                message: error.details[0].message
            })
        }

        const {email,otp} = value;

        const   user = await User.findOne({
                            where:{
                                email:email
                            }
                        })

        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found"
            });
            }

        if(user.otp !== otp){
            return res.status(400).json({
                status: false,
                message: "Invalid OTP"
                });
        }


        if (new Date() > new Date(user.otp_expiry)) {
            return res.status(400).json({
                status: false,
                message: "OTP expired"
            });
        }

        user.otp = null;
        user.otp_expire_at=null;
        await user.save();

        return res.status(200).json({
            status: true,
            message: "OTP verified successfully"
        });     
} catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error"
          });        
    }


}
// reset password
export const resetPassword = async (req, res) => {
    try {
      // ✅ validation
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
      });
  
      const { error, value } = schema.validate(req.body);
  
      if (error) {
        return res.status(400).json({
          status: false,
          message: error.details[0].message
        });
      }
  
      const { email, password } = value;
  
      // ✅ user find
      const user = await User.findOne({
        where: { email }
      });
  
      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User not found"
        });
      }
  
      // ✅ OPTIONAL (important for security)
      // check karo ki OTP verify hua tha ya nahi
      if (!user.is_verified) {
        return res.status(400).json({
          status: false,
          message: "OTP not verified"
        });
      }
  
      // ✅ password hash
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // ✅ update password
      user.password = hashedPassword;
  
      // optional: reset verification flag
      user.is_verified = false;
  
      await user.save();
  
      return res.status(200).json({
        status: true,
        message: "Password reset successfully"
      });
  
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: false,
        message: "Server error"
      });
    }
  };






