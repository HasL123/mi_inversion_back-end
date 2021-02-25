const express = require("express");
const Router = express.Router();
const planController = require("../controller/planController");
const rutasProtegidas = require("../utils/middleware/verification");

Router.post("/plan/add", rutasProtegidas, planController.add);
Router.post("/plan/show", rutasProtegidas, planController.show);
Router.post("/plan/delete", rutasProtegidas, planController.delete);
Router.post("/plan/update", rutasProtegidas, planController.update);
Router.post("/plan/byid", rutasProtegidas, planController.byId);

module.exports = Router;
