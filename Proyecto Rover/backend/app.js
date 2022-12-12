const express = require("express");
const app = express();

const errorMiddleware = require ("./middlewares/errors")

// Importar Rutas
const auth = require("./routes/auth")
const sensores = require("./routes/sensores")
const controlador = require("./routes/controlador")

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload())


// Rutas predeterminadas
app.use("api/v1/", auth); //usada para logear y registrar usuarios
app.use("api/v1/", sensores); //usada para mostrar la información de los sensores
app.use("api/v1/", controlador); //usada para mostar la camara en tiempo real y el manejo del Rover


// Middleware to handle error
app.use(errorMiddleware)

module.exports = app;
