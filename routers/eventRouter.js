const express = require("express");
const {createEvent, getEvents} = require("../controllers/eventController");
const eventRouter = express.Router();

eventRouter.post("/", createEvent);
eventRouter.get("/", getEvents);

module.exports = eventRouter;