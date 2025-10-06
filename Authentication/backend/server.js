import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv, { configDotenv } from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/Auth.js";

dotenv.config();
const app= express();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .then(err => console.log(err))

    // Use auth routes
app.use("/api/auth", AuthRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));


