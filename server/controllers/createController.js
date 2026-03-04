import mongoose from "mongoose";
import Journal from "../db/Create-entry.js";

export const create = async (req, res) => {
    try{
         const user_id = req.user.id;
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      message: "invalid input",
    });
  }
  const journal = await Journal.create({
    user_id,
    title,
    description,
  })


  res.status(200).json({
    message:"Journal Created",
  });
    }catch(err){
        console.error(err.message);
    }
 
};
