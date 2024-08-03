import express from "express";
import { test, updateUser} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);

//create update user wpi route
router.post("/update/:id", updateUser);

// When you use export default in a module, you are specifying the default export for that module. This allows you to import the module in another file using any name you choose.
export default router;
