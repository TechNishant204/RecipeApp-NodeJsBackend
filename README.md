# Recipes App
 ![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
  ![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
  ![Mongoose](https://img.shields.io/badge/Mongoose-7.x-orange)
  ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
  ![Postman](https://img.shields.io/badge/Postman-API%20Documentation-orange)
  
A full-featured CRUD (Create, Read, Update, Delete) application for managing recipes, built using Node.js, Express.js, and MongoDB with Mongoose. This application follows the MVC (Model-View-Controller) architecture, providing a RESTful API for interacting with recipe data. The project also utilizes Postman for API testing and documentation.<br><br>

**Published Postman Doc** : <a href="https://documenter.getpostman.com/view/21245283/2sAYkBuMoR">https://documenter.getpostman.com/view/21245283/2sAYkBuMoR</a>
**Deployed Link** : <a href="https://recipe-app-4h2w.onrender.com/recipe/getAllRecipes">https://recipe-app-4h2w.onrender.com/recipe/getAllRecipes</a>

## Features

- **Create Recipes:** Add new recipes to the database with ease.
- **Retrieve Recipes:** Fetch all available recipes or retrieve a single recipe by its unique ID.
- **Update Recipes:** Modify existing recipes and keep them up to date.
- **Delete Recipes:** Remove unwanted recipes from the database.
- **Full CRUD Functionality:** The app supports all CRUD operations for comprehensive recipe management.
- **MVC Pattern:** Ensures clean code organization, with separation of concerns between models, views, and controllers.
- **Error Handling & Validation:** Robust error handling and input validation for smooth API operations.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side execution.
- **Express.js:** Minimalist web framework for building APIs and handling HTTP requests.
- **MongoDB:** NoSQL database used for storing and managing recipe data.
- **Mongoose:** ODM (Object Data Modeling) library that provides a straightforward way to interact with MongoDB.
- **Postman:** Tool for API testing and documentation, used to ensure all API endpoints function as expected.
- **Render:** Platform where we can deploy our app live. 

## API Endpoints

- **Create Recipe**  
  `POST /recipe/createRecipe`
  
- **Retrieve All Recipes**  
  `GET /recipe/getAllRecipes`
  
- **Retrieve a Single Recipe**  
  `GET /recipe/getRecipeById/:id`
  
- **Update Recipe**  
  `PUT /recipe/updateRecipe/:id`
  
- **Delete Recipe**  
  `DELETE /recipe/deleteRecipe/:id`

## Project Structure

```bash
.
├── controllers     # Handles business logic
├── models          # Mongoose models for database interaction
├── routes          # API routes definitions
├── views           # Views for frontend (if applicable)
├── server.js          # Main application setup
└── package.json    # Project dependencies and scripts

```

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you find bugs or have feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
