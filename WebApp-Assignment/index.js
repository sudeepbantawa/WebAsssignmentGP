const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

//initialize mongodb connection
const connection = require("./database/connection");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/route");
//routes

app.use(routes);

//listen to 8080 port
app.listen(8080);
