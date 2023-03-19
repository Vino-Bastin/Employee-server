/**
 * @description This file contains the express app and global middleware's
 * @fileName app.js
 */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import employeeRoute from "./src/route/employeeRoute.js";
import { expressErrorHandler } from "./src/util/errorHandler.js";

// * express app
const app = express();

// * global middleware's
app.use(bodyParser.json());
app.use(cors());

// * routes
app.use("/api/v1/employees", employeeRoute);

// * global error handler
app.use(expressErrorHandler);

export default app;
