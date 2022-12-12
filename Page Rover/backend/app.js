const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/erros");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload())


// Import ALL Routes
const auth = require("./routes/auth");

app.use("/api/v1/", auth);

// Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
