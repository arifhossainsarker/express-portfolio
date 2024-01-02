const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const skillHandler = require("./routeHandler/skillHandler");
const projectHandler = require("./routeHandler/projectHandler");
const userHandler = require("./routeHandler/userHandler");




// express apps initialization
const app = express();
app.use(express.json());
dotenv.config();


// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/projects')
    .then(() => {
        console.log("database connection successfully");
    }).catch((err) => {
        console.log(err);
    })

// application router
app.use('/api/skill', skillHandler);
app.use('/api/project', projectHandler);
app.use('/api/user', userHandler);

// function error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

app.use(errorHandler);

app.listen(3000, () => {
    console.log("app listening at port 3000");
});