import mongoose from "mongoose";
import User from "../db/user.js";
export const dashboard = async (req,res) => {
    const User_id = req.user.id;
    const user_Data = await User.findById(User_id);
  
    res.status(200).send(user_Data);

   
}