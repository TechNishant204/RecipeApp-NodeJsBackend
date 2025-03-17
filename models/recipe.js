// Import mongoose to define the schema for the Recipe model
const mongoose = require("mongoose");

// Define the schema for the Recipe model
// The Recipe model will have the following fields:
const recipeSchema = new mongoose.Schema({
  title: {
    type: String, // Title of the recipe
    required: true,
  },
  description: {
    type: String, // Description of the recipe
    required: true,
  },
  ingredients: {
    type: [String], // Ingredients required for the recipe
    required: true,
  },
  tags: {
    type: [String], // Tags for the recipe:"veg", "non-veg", "dessert", "snack", "breakfast", "lunch", "dinner"
    required: true,
  },
  author: {
    type: String, // Name of the person who created the recipe
  },
  createdAt: {
    type: Date, // Date when the recipe was created
    default: Date.now,
  },
});

// Create and export the Recipe model based on the schema
module.exports = mongoose.model("Recipe", recipeSchema);
