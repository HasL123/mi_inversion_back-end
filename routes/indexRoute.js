const express = require("express");
const Router = express.Router();
const authRoute = require("../routes/authRoute");
const planRoute = require("../routes/planRoute");

Router.use("/", authRoute, planRoute);

module.exports = Router;
