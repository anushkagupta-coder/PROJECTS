const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // <--- import cors
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();

app.use(cors()); // <--- allow all origins
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
