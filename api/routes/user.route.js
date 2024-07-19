import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);

// When you use export default in a module, you are specifying the default export for that module. This allows you to import the module in another file using any name you choose.
export default router;