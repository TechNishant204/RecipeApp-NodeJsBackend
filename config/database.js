// Purpose: To connect to the MongoDB database using mongoose

// Import the mongoose package
const mongoose = require("mongoose");

// Load environment variables from the .env file
require("dotenv").config();

// Connect to the MongoDB database
exports.dbConnect = async () => {
  //mongoose.connect return one promise
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Connect to MongoDB Successfully"))
    .catch((error) => {
      console.log("Error in MongoDB Connection");
      console.error(error);
      process.exit(1); // Exit the process if the connection fails
    });
};
