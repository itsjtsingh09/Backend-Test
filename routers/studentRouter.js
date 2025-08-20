const express = require("express");
const {createStudent,getStudent} = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.post("/", createStudent);
studentRouter.get("/", getStudent);


module.exports = studentRouter;