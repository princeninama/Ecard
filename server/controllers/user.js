import {User} from "../models/User.js";
import {asyncError} from "../middleware/error.js";
import errorHanlder from "../utils/errorHandler.js";

import { cookieOptions, sendToken } from "../utils/features.js";



export const signup = asyncError(async (req, res, next) => {
    const {email, password} = req.body;
    // console.log("here")
    let user = await User.findOne({ email });
    if (user) return res.status(200).json({message:"already exist",success:false});
  
    // file request
     
  
      user = await User.create({
      
      
      email,
      password,
     
      
    });
    sendToken(user, res, `Registered Successfully`, 201);
  });

  export const login = asyncError(async (req, res, next) => {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email }).select("+password") || await User.findOne({ username }).select("+password");
    // handle error
   
  
    const isMatched = await user.comparePassword(password);
    
    if (!isMatched || !user) {
      return res.status(400).json({message:"incorrect Password/invalid username",success:false});
    }
    sendToken(user, res, `Welcome back ${user.name}`, 200);
  });