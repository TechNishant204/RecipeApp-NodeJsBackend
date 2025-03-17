// Middleware to Handle the error and send the response
// This function will be called when an error is thrown in the application
const errorHandler = (err, req, res, next) => {
  // Send the error response with error message and status code
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

// Export the error handler middleware
module.exports = errorHandler;
