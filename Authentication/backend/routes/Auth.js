import express from "express";
import mongoose from "mongoose";
import User from "../models/UserModels.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

const router=express.Router();

//Signup
router.post("/signup", async (req, res) => {
    try {
        const{name,email,password}=req.body;
        //hash password
        const hashedPassword=await bcrypt.hash(password, 10);

        //create  anew user
        const user=new User({name,email,password:hashedPassword});
        await user.save();
        res.status(201).json({message:"user created succesfully"});

    } catch (err) {
        res.status(400).json({err:err.message});
        
    }
});

//login

router.post("/login",async(req,res)=>{
    try {
        const{email,password}=req.body;

        //find suer by email
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({error:"user not found"});

        //compare password
        const match=await bcrypt.compare(password,user.password);
        if(!match) return res.status(400).json({error:"incorrect password"});

        //generate jwt token
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.json({message:"login succesful",token});

    } catch (err) {
        res.status(500).json({error:err.message});
        
    }
});

export default router;




