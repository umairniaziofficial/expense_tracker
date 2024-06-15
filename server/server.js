const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const connectToDatabase = require("./connection/db.js");

const app = express();

// Middleware setup
app.use(cors()); 
app.use(express.json());

// Load routes
app.use(require("./routes/route.js")); // Import routes from route.js

// Define the port from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Start the server
connectToDatabase().then(() => {
    app.listen(port, () => {
      console.log(`Listening on port http://localhost:${port}`);
    });
  });