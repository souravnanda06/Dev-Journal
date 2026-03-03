import express from 'express';
import mongoose, { Schema } from 'mongoose';
const CreateSchemaa = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
    },
    title:String,
    description:String,
},{timestamps:true}

);
const Journal = mongoose.model("Journal",CreateSchemaa);
 export default Journal;