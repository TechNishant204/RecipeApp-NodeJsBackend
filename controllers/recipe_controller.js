// Description: This file contains the logic for the recipe controller.
//Import the recipe model
const Recipe = require("../models/recipe");

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, tags, author } = req.body;

    // Check if the required fields are missing
    if (!title || !description || !ingredients || !tags || !author) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Create a new recipe
    const newRecipe = await Recipe.create({
      title,
      description,
      ingredients,
      tags,
      author,
    });
    res.status(201).json({
      success: true,
      message: "Recipe created successfully",
      data: newRecipe,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipeList = await Recipe.find();

    // Check if no recipes are found
    if (!recipeList) {
      return res.status(404).json({
        success: false,
        message: "No recipes found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Recipes fetched successfully",
      data: recipeList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    // Fetch the recipe by ID from the database
    const recipeId = req.params.id;

    // Check if the recipe ID is missing
    if (!recipeId) {
      return res.status(400).json({
        success: false,
        message: "Recipe ID is required",
      });
    }

    // Find the recipe by ID
    const newRecipe = await Recipe.findById({ _id: recipeId });
    if (!newRecipe) {
      return res.status(404).json({
        success: false,
        message: "No recipe found with the given ID",
      });
    }
    res.status(200).json({
      success: true,
      message: "Recipe fetched successfully for given id",
      data: newRecipe,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    // Fetch the recipe by ID from the database
    const recipeId = req.params.id;

    // Check if the recipe ID is missing
    if (!recipeId) {
      return res.status(400).json({
        success: false,
        message: "Recipe ID is required or invalid ID",
      });
    }

    // Get the new recipe data
    const newRecipe = req.body;

    // Find the recipe by ID and update it
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipe, {
      new: true, // return the updated document
    });

    // Check if no recipe is found
    if (!updatedRecipe) {
      return res.status(404).json({
        success: false,
        message: "No recipe found with the given ID",
      });
    }
    res.status(200).json({
      success: true,
      message: "Recipe updated successfully",
      data: updatedRecipe,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
exports.deleteRecipe = async (req, res) => {
  try {
    //
    const recipeId = req.params.id;

    // Check if the recipe ID is missing
    if (!recipeId) {
      return res.status(400).json({
        success: false,
        message: "Recipe ID is required or invalid ID",
      });
    }

    // Delete the recipe by ID
    const deleteRecipe = req.body;
    const deletedRecipe = await Recipe.findByIdAndDelete(
      recipeId,
      deleteRecipe,
      {
        new: true, // return the updated document
      }
    );
    if (!deletedRecipe) {
      return res.status(404).json({
        success: false,
        message: "No recipe found with the given ID",
      });
    }
    res.status(200).json({
      success: true,
      message: "Recipe Deleted successfully",
      data: deletedRecipe,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
