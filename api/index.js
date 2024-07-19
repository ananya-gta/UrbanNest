import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} !`);
});

//this is a test api route => req is the data that we get from the client side, when they send data from browser that's request ,
// => res is the data we send back from the server side
// => this will work for localhost:3000 but we want that whenever we hit localhost:5173, to interact with backend on ui then we need to create a proxy
// => we can send anything json also, but this is not a good practice, create folder for routes and use them in index.js
// When you use export default in a module, you are specifying the default export for that module. This allows you to import the module in another file using any name you choose.
app.use("/api/user", userRouter);
