const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const postRoutes = require("./routes/postRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

// Test route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Express.js MySQL API!" });
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
