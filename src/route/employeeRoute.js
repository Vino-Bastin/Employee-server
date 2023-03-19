/**
 * @description This file contains the employee route
 * @name employeeRoute.js
 */
import express from "express";

import {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  employeeMiddleware,
} from "../controller/employeeController.js";

// * Employee route
const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.patch("/:employeeId", employeeMiddleware, updateEmployee);
router.delete("/:employeeId", employeeMiddleware, deleteEmployee);

export default router;
