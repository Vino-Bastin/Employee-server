/**
 * @name errorHandler.js
 * @description This file contains the error handler for uncaught exceptions and unhandled rejections and express error handler
 */

// * Error Handler for Uncaught Exceptions and Unhandled Rejections
export const errorHandler = (err) => {
  console.log(`🔥 ${err.name} ${err.message}`);
  process.exit(1);
};

export const expressErrorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let status = err.status || "error";
  let message = err.message || "Internal Server Error";
  let isArrayOfErrors = false;

  // * Duplicate Key Error from MongoDB
  if (err.code === 11000) {
    statusCode = 400;
    message = `${Object.entries(err.keyValue)[0][0]} : ${
      Object.entries(err.keyValue)[0][1]
    } is Already Used. Please provide a New Value.`;
  }

  // * Validation Error from Mongoose
  if (err.errors) {
    statusCode = 400;
    message = [];
    isArrayOfErrors = true;
    Object.entries(err.errors).map((err) => {
      message.push(`${err[0]} : ${err[1].message}.`);
    });
  }

  res.status(statusCode).json({
    status: status,
    isSuccess: false,
    isArrayOfErrors,
    message,
  });
};
