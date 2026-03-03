import { deleteController } from "../controllers/deleteController.js";
import { auth } from "../middilewares/auth.js";
import express from 'express'
const router  = express.Router();
router.delete("/delete/:id",auth,deleteController)
export default router;