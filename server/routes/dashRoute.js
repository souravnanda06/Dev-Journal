import { dashboard } from "../controllers/dashController.js";
import { auth } from "../middilewares/auth.js";
import express from "express"
const router = express.Router();

router.get("/dashboard",auth,dashboard);
export default router;