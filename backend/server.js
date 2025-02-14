const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Fix: Add a route for "/"
app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
});

// Sample API route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
