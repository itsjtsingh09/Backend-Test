const express = require("express");
const {registerStudentEvent,getEventRegistrations} = require("../controllers/registerController");
const registerRouter = express.Router();

registerRouter.post("/", registerStudentEvent);
registerRouter.get("/:eventId", getEventRegistrations);

module.exports = registerRouter;