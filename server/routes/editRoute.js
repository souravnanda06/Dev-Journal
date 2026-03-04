import express from 'express';
import { editJournal } from '../controllers/EditController.js';
import { auth } from '../middilewares/auth.js';
const router = express.Router();
router.get("/getjournal/:id",auth,editJournal);
export default router;