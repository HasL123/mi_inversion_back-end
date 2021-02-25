const request = require("../connection");
const planController = {};
const { plan } = require("../utils/validation/validation");
const planModelo = require("../modelo/planModel");

planController.show = async (req, res, next) => {
  try {
    const result = await planModelo.show(req.body);
    return res.json({ planes: result });
  } catch (err) {
    return next(err);
  }
};

planController.add = async (req, res, next) => {
  const validado = plan.validate(req.body);
  if (validado.error) return res.json({ validado: validado });
  try {
    const result = await planModelo.add(req.body);
    res.json({ result: result });
  } catch (err) {
    return next(err);
  }
};

planController.update = async (req, res, next) => {
  const validado = plan.validate(req.body);
  if (validado.error) return res.json({ validado: validado.error.message });
  try {
    const result = await planModelo.update(req.body);
    res.json({ result: result });
  } catch (err) {
    return next(err);
  }
};

planController.byId = async (req, res, next) => {
  try {
    const result = await planModelo.byId(req.body);
    res.json({ planes: result });
  } catch (err) {
    return next(err);
  }
};

planController.delete = async (req, res, next) => {
  try {
    const result = await planModelo.delete(req.body);
    res.json({ result: result });
  } catch (err) {
    return next(err);
  }
};

module.exports = planController;
