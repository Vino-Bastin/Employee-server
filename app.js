/**
 * @description This file contains the express app and global middleware's
 * @fileName app.js
 */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

import employeeRoute from "./src/route/employeeRoute.js";
import { expressErrorHandler } from "./src/util/errorHandler.js";

// * express app
const app = express();

// * static files
app.use(express.static(path.resolve("build")));

// * global middleware's
app.use(bodyParser.json());
app.use(cors());

// * serve static files
app.get("/", (req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});

// * routes
app.use("/api/v1/employees", employeeRoute);

// * global error handler
app.use(expressErrorHandler);

export default app;
