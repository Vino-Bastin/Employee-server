/**
 * @name server.js
 * @description This file is the entry point of the application.
 */

import mongoose from "mongoose";
import * as dotenv from "dotenv";

import app from "./app.js";
import { errorHandler } from "./src/util/errorHandler.js";

// * global error handler
process.on("uncaughtException", errorHandler);
process.on("unhandledRejection", errorHandler);

// * load environment variables
dotenv.config();

// * connect to database
const DB_URL = process.env.MONGODB_URI.replace(
  "<password>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to database!"))
  .catch(() => console.log("Connection failed!"));

// * start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
