const mongoose = require("mongoose");

// Validate the existence of the ATLAS_URI environment variable
if (!process.env.ATLAS_URI) {
  console.error("ATLAS_URI is not defined in the environment variables.");
  process.exit(1); // Exit the process with a failure code
}

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    // Attempt to connect to the database using the ATLAS_URI
    const db = await mongoose.connect(process.env.ATLAS_URI);
    console.log("Database connection established successfully");
    return db;
  } catch (error) {
    // Log the error and exit the process with a failure code
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

// Export the connection function for use in other modules
module.exports = connectToDatabase;
