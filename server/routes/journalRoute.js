import { journalController } from "../controllers/journalController.js";
import  { auth } from '../middilewares/auth.js'
import express from 'express'
const router = express.Router();
router.get("/alljournal",auth,journalController);
export default router;