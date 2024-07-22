import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "./../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const encryptedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: encryptedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully.");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "User not found!"));

    const isPasswordValid = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordValid)
      return next(
        errorHandler(401, "You have entered an invalid username or password.")
      );

    // its not a good practice to show pw also so we will remove pw and add the rest in cookie
    // to see what _doc is try to send only validUser
    // if you are wondering where you can see the information, then inspect -> network -> signin you will see there
    const { password: pw, ...restUserInfo } = validUser._doc;

    // to authenticate the user we will add cookie into the browser,
    // we need to create a hashed token which includes email of the user or id of the user
    // and save this token inside the browser cookie, so each time user want to do something like update,
    // we will check if they are authenticated or not, but we will not save it as it is, we will hash it, we will do it by jwt token

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // save this token in cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(restUserInfo);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const validUser = await User.findOne({ email: req.body.email });
    if (validUser) {
      //if it's a valid user then register the user
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pw, ...restUserInfo } = validUser._doc;
      // save this token in cookie
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(restUserInfo);
    } else {
      // create the user
      // since to create a user, pw is a required field, but while signing up with google we do not have pw
      // then we will get error so we will generate a random pw, the user can update it later
      // it will create a 8 digit random alphanumeric pw, here 36 means numbers from 0-9 and letters from a-z, and get last 8 digits
      const generatedPassword = Math.random().toString(36).slice(-8);
      // now hash the pw
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      // create a new username bcz google stores name as Ananya Gupta
      const generatedUsername =
        req.body.name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-4);
      // now create newUser
      const newUser = new User({
        username: generatedUsername,
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });

      await newUser.save();
      
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pw, ...restUserInfo } = newUser._doc;
      // save this token in cookie
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(restUserInfo);
    }
  } catch (error) {
    next(error);
  }
};
