import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
     
        email:{
            type: String,
            required:[true,"Please enter email"],
            unique: [true,"Email already exists"],
            validate:validator.isEmail,
        },
        password:{
            type: String,
            required:[true,"Please enter password"],
            minLength:[6,"Password must be atleast 6 characters long"],
            
        },
        
},
{
    timestamps:true
})

schema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

schema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

schema.methods.generateToken = function(){
    
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:1000*60*60*24*10})
}

export const User = mongoose.model("User", schema);