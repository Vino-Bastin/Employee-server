/**
 * description: This file contains the wrapper function that will catch any errors that are thrown in the async function and pass them to the next function in the middleware chain. This is useful because it allows us to avoid using try/catch blocks in our async functions.
 * @name catchAsync.js
 */

//* This is a wrapper function that will catch any errors that are thrown in the async function and pass them to the next function in the middleware chain. This is useful because it allows us to avoid using try/catch blocks in our async functions.
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
