const express = require("express");
const {createStudent} = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.post("/", createStudent);

module.exports = studentRouter;