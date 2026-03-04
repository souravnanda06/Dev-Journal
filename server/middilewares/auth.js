import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../controllers/authcontroller.js";
import express from 'express'
export const auth = (req,res,next)=>{
   
    const authHeader = req.headers.authorization;
  
    if(!authHeader){
        return res.status(400).json({
            message:"No Token Provided"
        })
        
    }const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
   
    }catch(err){
    return res.status(404).json({
        message:"invalid token"
    });
    }
}