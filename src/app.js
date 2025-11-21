const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Error Handler
app.use(errorHandler);

module.exports = app;
