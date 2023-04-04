const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
require("dotenv").config();

// Database connections
const meltEvaDbConnection = require("./connections/meltEvaDbConnection");
const meltRoxDbConnection = require("./connections/meltRoxDbConnection");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
meltEvaDbConnection();
meltRoxDbConnection();

// Routes
app.use("/api", routes);

// Start server on port 5000 only when connected to database
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
