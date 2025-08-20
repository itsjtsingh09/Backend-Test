const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const eventRouter=require("./routers/eventRouter")
const registerRouter=require("./routers/registerRouter")
const studentRouter=require("./routers/studentRouter")

const app = express();
app.use(bodyParser.json());

app.use("/api/students",studentRouter);
app.use("/api/events",eventRouter);
app.use("/api/registrations",registerRouter);





// Connected to mongodb //
mongoose.connect(process.env.DATABASEURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port " + process.env.PORT);
    });
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});










