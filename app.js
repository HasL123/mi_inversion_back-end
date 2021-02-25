require("dotenv").config();
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const indexRoute = require("./routes/indexRoute");
const error = require("./utils/middleware/error");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var staticPath = path.join(__dirname, "/");

app.use(express.static(staticPath));
app.use(cors({ origin: "*" }));
app.use("/", indexRoute);
app.use(error);
module.exports = app;
