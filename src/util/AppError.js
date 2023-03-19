/**
 * @description This is a custom error class that extends the built-in Error class
 * @name AppError.js
 */

// * This is a custom error class that extends the built-in Error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
