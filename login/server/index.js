import express from "express";

const app = express();
const PORT = 5000; // you can change this if needed

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
