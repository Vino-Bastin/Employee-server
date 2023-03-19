/**
 * @file employeeController.js
 * @description This file contains the employee controller functions and middleware's
 */
import mongoose from "mongoose";

import Employee from "../model/employee.js";
import catchAsync from "../util/catchAsync.js";
import AppError from "../util/AppError.js";

// ************************* start of middleware functions ****************************** //
// * Employee route handlers middleware
export const employeeMiddleware = catchAsync(async (req, res, next) => {
  const employeeId = req.params.employeeId;
  if (!employeeId) throw new AppError("Employee ID is required", 400);

  if (!mongoose.Types.ObjectId.isValid(employeeId))
    throw new AppError("Invalid Employee ID", 400);

  const employee = await Employee.findById(employeeId);
  if (!employee) throw new AppError("Employee not found", 404);

  req.employee = employee;
  return next();
});
// ************************** end of middleware functions ********************************** //

// ********************** start of route controller functions ****************************** //
// * create employee
export const createEmployee = catchAsync(async (req, res, next) => {
  const employee = await Employee.create(req.body);
  res.status(201).json({
    status: "success",
    isSuccessful: true,
    results: 1,
    data: employee,
  });
});

// * get all employees
export const getAllEmployees = catchAsync(async (req, res, next) => {
  const employees = await Employee.find().select("-__v");
  res.status(200).json({
    status: "success",
    isSuccessful: true,
    results: employees.length,
    data: employees,
  });
});

// * update employee
export const updateEmployee = catchAsync(async (req, res, next) => {
  const employee = await Employee.findByIdAndUpdate(
    req.employee._id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  ).select("-__v");

  res.status(200).json({
    status: "success",
    isSuccessful: true,
    results: 1,
    data: employee,
  });
});

// * delete employee
export const deleteEmployee = catchAsync(async (req, res, next) => {
  await Employee.findByIdAndDelete(req.employee._id);

  res.status(200).json({
    status: "success",
    isSuccessful: true,
    results: 1,
  });
});
// ********************** end of route controller functions ****************************** //
