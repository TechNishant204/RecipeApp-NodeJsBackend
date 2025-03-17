const express = require("express");
require("dotenv").config();
const db = require("./config/database");
const errorHandler = require("./middleware/errorHandler");
const recipeRoutes = require("./routes/recipeRoutes");

// Instantiate the app
const app = express();

// Connect to the database
db.dbConnect();

// Middleware Parse incoming JSON data
app.use(express.json());

// Mount the recipe routes under the /recipe path
app.use("/recipe", recipeRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server and listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
