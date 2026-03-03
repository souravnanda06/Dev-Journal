import express from "express"
import { create } from "../controllers/createController.js";
import { auth } from "../middilewares/auth.js";
const router = express.Router();
router.post("/create-entry",auth,create);
export default router;