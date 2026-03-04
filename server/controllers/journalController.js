import mongoose from "mongoose";
import Journal from "../db/Create-entry.js";
export const journalController = async (req,res)=>{
    const user_id = req.user.id;
    const allJournal = await Journal.find({
        user_id,
    })
   
    res.status(200).json(allJournal)
    
}