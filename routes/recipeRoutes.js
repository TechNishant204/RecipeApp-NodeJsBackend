// Description: This file contains the routes for the recipe API.
// Import express
const express = require("express");
// Import the router from express
const routes = express.Router();

// Import the recipe controller methods for the routes
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipe_controller");

// Define routes for the recipe API

// createRecipe: Create a new recipe.
routes.post("/createRecipe", createRecipe);

// getAllRecipes: Retrieve all recipes.
routes.get("/getAllRecipes", getAllRecipes);

// getRecipeById: Retrieve a single recipe by ID.
routes.get("/getRecipeById/:id", getRecipeById);

// updateRecipe: Update a recipe by ID.
routes.put("/updateRecipe/:id", updateRecipe);

// deleteRecipe: Delete a recipe by ID.
routes.delete("/deleteRecipe/:id", deleteRecipe);

// Export the routes
module.exports = routes;
