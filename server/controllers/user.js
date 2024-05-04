import { User } from "../models/User.js";
import { asyncError } from "../middleware/error.js";
import errorHanlder from "../utils/errorHandler.js";

import { cookieOptions, sendToken } from "../utils/features.js";
import { Templates } from "../models/templets.js";

export const signup = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  console.log("here");
  let user = await User.findOne({ email });
  if (user)
    return res.status(200).json({ message: "already exist", success: false });

  // file request

  user = await User.create({
    email,
    password,
  });
  sendToken(user, res, `Registered Successfully`, 201);
});

export const login = asyncError(async (req, res, next) => {
  const { username, password } = req.body;
  console.log("info  : ", username, password);

  let user = await User.findOne({ email: username });
  // console.log('user : ',user.password)

  if (!user) {
    return res
      .status(200)
      .json({ message: "Invalid username/email", success: false });
  }

  const isMatched = await user.comparePassword(password);
  if (!isMatched) {
    return res
      .status(200)
      .json({ message: "Incorrect password", success: false });
  }

  sendToken(user, res, `Welcome back ${user.name}`, 200);
});

export const SaveTemplates = async (req, res, next) => {
  console.log("its here");
  let newTemplates = new Templates({
    title: req.body.title,
    Photo: {
      Data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  });
  const resp = await newTemplates.save();

  return res.status(200).json({ message: "saved", success: true });
};

export const logOut = asyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Log Out Successfully",
    });
});

export const loadtemplates = asyncError(async (req, res, next) => {
  const { page, pageSize, row, col } = req.params;
  const skip = (page - 1) * pageSize;

  const data = await Templates.find().skip(skip).limit(parseInt(pageSize));

  let Tempaletlist = [];

  for (let i = 0, k = 0; i < row; i++) {
    Tempaletlist[i] = []; // Initialize each row
    for (let j = 0; j < col; j++) {
      if (k < data.length) {
        const base64Image = data[k].Photo.Data.toString("base64");
        const imageData = `data:${data[k].Photo.contentType};base64,${base64Image}`;
        const object = {
          imageURL: imageData,
          title: data[k].title,
          type: data[k].type,
        };
        // console.log('object : ', object.title);
        Tempaletlist[i][j] = object;
        k++;
      } else {
        Tempaletlist[i][j] = null; // Fill with null if no more data
      }
    }
  }
  console.log(Tempaletlist);

  return res.status(200).json({ data: Tempaletlist });
});

export const forget = async (req, res) => {
  const email = req.body;
  let user = await User.findOne({ email: email });
  if (!user) {
    console.log("User not exist for forgot password")
    return false;
  }
  else
  {
    //send gmail to the user
  }
};
