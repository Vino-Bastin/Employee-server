import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// * express app
const app = express();

// * global middleware's
app.use(bodyParser.json());
app.use(cors());

export default app;
