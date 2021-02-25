const express = require("express");
const Router = express.Router();
const authController = require("../controller/authController");
const planController = require("../controller/planController");
const rutasProtegidas = require("../utils/middleware/verification");

Router.post("/login", authController.login);
Router.post("/plan/api/verify", rutasProtegidas, (req, res) => {
  res.json({ message: "todo al 100" });
});
module.exports = Router;
